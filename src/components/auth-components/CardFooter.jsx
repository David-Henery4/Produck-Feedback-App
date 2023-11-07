import { getProviders, getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
import { options } from "../../app/api/auth/[...nextauth]/options";
import { ProvidersSignIn, OrSeperator, CredentialsSignIn } from "./footer-compnents";

const CardFooter = async () => {
  const session = await getServerSession(options);
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();
  // console.log(providers, csrfToken);
  console.log(session?.user);
  if (session?.user){
    const isUserActive = Object?.entries(session?.user).filter(item => item[0] !== "image").every(item => item[1] === undefined)
    console.log(isUserActive)
  }
  // onClick={() => signIn(provider.id)
  //   // If the user is already logged in, redirect.
  //   // Note: Make sure not to redirect to the same page_
  //   // To avoid an infinite loop!
  if (session) {
    redirect("/")
  }
  return (
    <section className="px-6 pt-10 pb-14 w-full bg-white smTab:px-14 tab:px-20">
      {/* Providers Sign-in */}
      <ProvidersSignIn providers={providers} />

      <OrSeperator />

      {/* Credentials Sign-in */}
      <CredentialsSignIn csrfToken={csrfToken} />
    </section>
  );
};

export default CardFooter;
