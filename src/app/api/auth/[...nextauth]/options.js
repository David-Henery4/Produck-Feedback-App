import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);
        // sets up my profile as a admin by using my email
        // all others a set a role of  "GitHub User"
        let userRole = "GitHub User";
        if (profile?.email == "david4henery00@hotmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // This adds our role, on to the token, 
    // so we can utilize it on the server side
    async jwt({token, user}){
      if (user) token.role = user.role
      return token
    },
    // This here will allow us to do the same on the
    // client side as well
    async session({session, token}){
      if (session?.user) session.user.role = token.role
      return session
    }
  }
};