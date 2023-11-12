import { SignOut, ThemeToggle } from "../shared-components";

const SignOutAndThemeToggle = ({user}) => {
  //
  return (
    <section className="hidden w-full max-w-[1110px] mx-auto justify-between items-center lgTab:py-7 lgTab:px-10 lgTab:flex">
      <div className="flex justify-start items-center gap-2">
        <SignOut />
        <p className="text-xs font-semibold text-gray dark:text-white/75">
          ({user.name || user.username})
        </p>
      </div>
      <ThemeToggle/>
    </section>
  );
};

export default SignOutAndThemeToggle;
