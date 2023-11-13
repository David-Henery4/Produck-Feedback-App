"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const DemoSignIn = () => {
  const router = useRouter();
  //
  const handleDemoSignin = async () => {
    const data = await signIn("credentials", {
      redirect: false,
      username: "demo1234",
      password: "XdemoCheckX1095",
    });
    if (data.error) {
      console.error(data.error)
      return;
    }
    router.refresh();
  };
  //
  return (
    <div className="mt-8 text-xs text-blue hover:text-blueShade dark:text-purple dark:hover:text-pink">
      <button onClick={() => handleDemoSignin()}>(click here to sign in with demo account)</button>
    </div>
  );
};

export default DemoSignIn;
