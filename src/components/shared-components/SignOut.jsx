"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  const handleSignOut = () => {
    signOut()
  }
  //
  return (
    <button className="relative text-sm font-semibold text-blue" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;