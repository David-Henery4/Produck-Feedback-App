import { CardHeader, CardFooter } from "@/components/auth-components";

export default async function Signin( ) {
  //
  return (
    <main className="bg-offWhite text-center grid grid-cols-mob smTab:grid-cols-smTab smTab:pt-14 smTab:pb-28">
      {/* CARD */}
      <div className="w-full max-w-lg col-start-1 col-end-13 smTab:col-start-2 smTab:col-end-12 smTab:rounded-[10px] smTab:overflow-hidden smTab:mx-auto">
        {/* card header */}
        <CardHeader/>

        {/* card footer */}
        <CardFooter/>

      </div>
      {/**/}
    </main>
  );
}

// {
//   Object?.values(providers).map((provider) => (
//     <div key={provider.name}>
//       <button onClick={() => signIn(provider.id)>Sign in with {provider.name}</button>
//     </div>
//   ));
// }
// <form method="post" action="/api/auth/callback/credentials">
//   <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//   <label>
//     Username
//     <input name="username" type="text" />
//   </label>
//   <label>
//     Password
//     <input name="password" type="password" />
//   </label>
//   <button type="submit">Sign in</button>
// </form>;

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, options);

//   // If the user is already logged in, redirect.
//   // Note: Make sure not to redirect to the same page
//   // To avoid an infinite loop!
//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   const providers = await getProviders();
//   const csrToken = await getCsrfToken(context);
//   // console.log(providers, csrToken)

//   return {
//     props: { providers: providers || [], csrToken },
//     // props: { csrToken },
//   };
// }
