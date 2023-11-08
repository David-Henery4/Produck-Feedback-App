import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/User";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    //
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);
        // sets up my profile as a admin by using my email
        // all others a set a role of  "GitHub User"
        let userRole = "GitHub User";
        if (profile?.email == "david4henery00@hotmail.com") {
          userRole = "admin";
        }
        console.log("Returned Value: ", {
          ...profile,
          role: userRole,
        });
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "your-username",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({
            username: credentials.username,
          })
            .lean()
            .exec();

          // console.log({...foundUser, msg:"test"}, "user details");
          if (foundUser) {
            // if user exists // if user isn't found, that is handled by the null
            // console.log("user exists");
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            // console.log("match",match)

            if (match) {
              // console.log("Good Pass");
              delete foundUser.password;
              foundUser["role"] = "Unverified Email User";
              foundUser["message"] = "Work please";
              return { ...foundUser, msg: "hello" };
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
    //
  ],
  //
  callbacks: {
    // This adds our role, on to the token,
    // so we can utilize it on the server side
    async jwt({ token, user, session }) {
      console.log("jwt callback: ", token, user, session);
      if (user) {
        // token.role = user.role
        // token.username = user.username
        // user = { ...user, username: user.username };
        console.log("jwt user: ", user);
        console.log("jwt token: ", token);
        return {
          ...token,
          id: user._id,
          username: user.username,
          role: user.role,
        };
      }
      return token;
    },
    // This here will allow us to do the same on the
    // client side as well
    async session({ session, token, user }) {
      // if (session?.user) session.user.role = token.role;
      return {
        ...session.user,
        id: token.id,
        username: token.username,
        role: token.role
      }
      // return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};
