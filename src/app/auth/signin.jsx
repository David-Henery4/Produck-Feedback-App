// import { getProviders, signIn, getCsrfToken } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { options } from "../api/auth/[...nextauth]/options";

// export default function Signin({ csrfToken }) {
//   return (
//     <form method="post" action="/api/auth/callback/credentials">
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//       <label>
//         Username
//         <input name="username" type="text" />
//       </label>
//       <label>
//         Password
//         <input name="password" type="password" />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   );
// }

// export async function getServerSideProps(context) {
//   // const session = await getServerSession(context.req, context.res, options);

//   // If the user is already logged in, redirect.
//   // Note: Make sure not to redirect to the same page
//   // To avoid an infinite loop!
//   // if (session) {
//   //   return { redirect: { destination: "/" } };
//   // }

//   // const providers = await getProviders();
//   const csrToken = await getCsrfToken(context)

//   return {
//     // props: { providers: providers || [], csrToken },
//     props: { csrToken },
//   };
// }
