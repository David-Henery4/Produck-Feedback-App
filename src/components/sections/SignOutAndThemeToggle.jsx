import { SignOut } from "../shared-components";

const SignOutAndThemeToggle = ({user}) => {
  return (
    <section className="hidden w-full max-w-[1110px] mx-auto lgTab:py-7 lgTab:px-10 lgTab:block">
      <div className="flex justify-start items-center gap-2">
        <SignOut />
        <p className="text-xs font-semibold text-gray">({user.name || user.username})</p>
      </div>
    </section>
  );
};

export default SignOutAndThemeToggle;
