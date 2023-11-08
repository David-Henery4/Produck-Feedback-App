

const SubmitBtn = ({ isSignUp, setIsSignUp }) => {
  return (
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
  );
};

export default SubmitBtn