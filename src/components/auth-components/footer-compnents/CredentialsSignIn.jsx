"use client";
import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import signInWithCredentials from "@/lib/signInWithCredentials";


const CredentialsSignIn = ({ csrfToken }) => {
  const formRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  //
  const handleValidation = () => {
    username.trim() === ""
      ? setIsUsernameInvalid(true)
      : setIsUsernameInvalid(false);
    password.trim() === ""
      ? setIsPasswordInvalid(true)
      : setIsPasswordInvalid(false);
    return isPasswordInvalid || isUsernameInvalid ? true : false;
  };
  //
  const handleSubmit = async () => {
    if (username.trim() === "" || password.trim() === "") return;
    if (!isSignUp) {
      signIn("credentials", { username, password});
      // const data = await signInWithCredentials({
      //   csrfToken,
      //   username,
      //   password
      // });
      // console.log(data)
    }
    if (isSignUp){

    }
  };
  //
  const handleSignUp = () => {};
  //
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        handleValidation();
        handleSubmit();
      }}
      // method="post"
      // action="/api/auth/callback/credentials"
      className="w-full"
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <div className="">
        <label
          htmlFor="username"
          className="text-lightNavy font-bold -tracking-[0.19px]"
        >
          Username
        </label>
        <input
          id="username"
          className={`bg-offWhite w-full outline-none px-3 py-4 mt-3 rounded-[10px] ${
            isUsernameInvalid ? "border border-red" : "border border-offWhite"
          }`}
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {isUsernameInvalid && (
          <p className="text-sm font-normal text-red mt-1">
            Username is required!
          </p>
        )}
      </div>
      <div className="mt-4">
        <label
          htmlFor="password"
          className="text-lightNavy font-bold -tracking-[0.19px]"
        >
          Password
        </label>
        <input
          id="password"
          className={`bg-offWhite w-full outline-none px-3 py-4 mt-3 rounded-[10px] ${
            isPasswordInvalid ? "border border-red" : "border border-offWhite"
          }`}
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPasswordInvalid && (
          <p className="text-sm font-normal text-red mt-1">
            Password is required!
          </p>
        )}
      </div>
      <div className="w-full mt-9">
        <button
          type="submit"
          className="w-full py-6 px-4 font-semibold rounded-[10px] bg-purple text-white"
        >
          {isSignUp ? "Sign-Up" : "Sign-In"}
        </button>
        <p className="mt-4 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-blue cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {" "}
            {isSignUp ? "Sign-in!" : "Sign-up!"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default CredentialsSignIn;
