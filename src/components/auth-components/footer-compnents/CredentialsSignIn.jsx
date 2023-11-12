"use client";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useTheme from "@/hooks/useTheme";
import createUser from "@/lib/createUser";
import generateUserColour from "@/redux/features/helpers/generateUserColour";
import checkPreferedScheme from "@/hooks/theme-helpers/checkPreferedScheme";
import {
  SignInError,
  SubmitBtn,
  CredentialInput,
  DuplicateUser,
} from "./credentials-signin-components";


const CredentialsSignIn = ({ csrfToken }) => {
  const router = useRouter();
  const { toggleTheme, changeTheme, setInitialTheme } = useTheme();
  // const {status} = useSession({required: true})
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSignInError, setIsSignInError] = useState(false);
  const [isDuplicateSignUpOrError, setIsDuplicateSignUpOrError] = useState({
    msg: "",
    isError: false,
  });
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
      handleSignIn();
    }
    if (isSignUp) {
      handleSignUp();
    }
  };
  ///
  const handleSignIn = async () => {
    const data = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (data.error) {
      setIsSignInError(true);
      return;
    }
    setIsSignInError(false);
    router.refresh();
  };
  //
  const handleSignUp = async () => {
    setIsDuplicateSignUpOrError({ msg: "", isError: false });
    const res = await createUser({
      username,
      password,
      userColour: generateUserColour(),
    });
    if (res.message === "Duplicate Username") {
      setIsDuplicateSignUpOrError({
        msg: "Username already exists",
        isError: true,
      });
      return;
    }
    if (res.message === "Error creating account") {
      setIsDuplicateSignUpOrError({
        msg: res?.message,
        isError: true,
      });
      return;
    }
    if (res.message === "User Created"){
      handleSignIn();
      return
    }
  };
  //
  useEffect(() => {
    setInitialTheme();
  }, [])
  //
  useEffect(() => {
    checkPreferedScheme(changeTheme)
  }, [])
  //
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleValidation();
        handleSubmit();
      }}
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
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
      />
      {isSignInError && <SignInError />}
      {isDuplicateSignUpOrError?.isError && (
        <DuplicateUser msg={isDuplicateSignUpOrError?.msg} />
      )}
      <SubmitBtn
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        setPassword={setPassword}
        setUsername={setUsername}
        setIsSignInError={setIsSignInError}
        setIsDuplicateSignUpOrError={setIsDuplicateSignUpOrError}
      />
    </form>
  );
};

export default CredentialsSignIn;
