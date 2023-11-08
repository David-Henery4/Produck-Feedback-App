"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import signInWithCredentials from "@/lib/signInWithCredentials";
import createUser from "@/lib/createUser";
import {
  SignInError,
  SubmitBtn,
  CredentialInput,
} from "./credentials-signin-components";

// const data = await signInWithCredentials({
//   csrfToken,
//   username,
//   password
// });

const CredentialsSignIn = ({ csrfToken }) => {
  const router = useRouter()
  // const {status} = useSession({required: true})
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isSignInError, setIsSignInError] = useState(false);
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
    setIsPasswordInvalid(false);
    setIsUsernameInvalid(false);
    if (!isSignUp) {
      const data = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      console.log(data);
      if (data.error) {
        setIsSignInError(true);
        return
      }
      setIsSignInError(false)
      router.refresh()
    }
    if (isSignUp) {
      const res = await createUser({ username, password });
      console.log("response", res);
    }
  };
  //
  const handleSignUp = () => {};
  //
  return (
    <form
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
      <CredentialInput
        name="username"
        label="Username"
        value={username}
        setValue={setUsername}
        isInputInvalid={isUsernameInvalid}
      />
      <CredentialInput
        name="password"
        label="Password"
        value={password}
        setValue={setPassword}
        isInputInvalid={isPasswordInvalid}
      />
      {isSignInError && <SignInError />}
      <SubmitBtn isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    </form>
  );
};

export default CredentialsSignIn;
