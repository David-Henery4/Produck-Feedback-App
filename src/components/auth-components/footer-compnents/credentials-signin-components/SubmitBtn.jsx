

const SubmitBtn = ({
  isSignUp,
  setIsSignUp,
  setUsername,
  setPassword,
  setIsSignInError,
  setIsDuplicateSignUpOrError,
}) => {
  return (
    <div className="w-full mt-9">
      <button
        type="submit"
        className="w-full py-6 px-4 font-semibold rounded-[10px] bg-purple dark:bg-blue text-white"
      >
        {isSignUp ? "Sign-Up" : "Sign-In"}
      </button>
      <p className="mt-4 text-sm">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <span
          className="text-blue dark:text-purple cursor-pointer"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setPassword("");
            setUsername("");
            setIsSignInError(false)
            setIsDuplicateSignUpOrError({ msg: "", isError: false });
          }}
        >
          {" "}
          {isSignUp ? "Sign-in!" : "Sign-up!"}
        </span>
      </p>
    </div>
  );
};

export default SubmitBtn