import { CategoryBox, RoadmapBox } from "."
import { SignOut, ThemeToggle } from "../shared-components";

const Sidebar = ({ isSidebarOpen, children, user }) => {
  //
  return (
    <aside
      className={`absolute bg-offWhite dark:bg-navy top-full right-0 w-3/4 h-[100svh] transition-all p-6 flex flex-col justify-start items-center gap-6 z-50 overflow-y-auto lap:hidden ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CategoryBox />
      {/**/}
      {children} {/*{children} = <RoadmapBox /> */}
      {/**/}
      <div className="w-full max-w-[350px] flex flex-col justify-between items-center gap-8 p-6 rounded-[10px] bg-white dark:bg-lightNavy smTab:flex-row">
        <div className="flex justify-start items-center gap-2">
          <SignOut />
          <p className="text-xs font-semibold text-gray dark:text-white/75">
            ({user.name || user.username})
          </p>
        </div>

        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar