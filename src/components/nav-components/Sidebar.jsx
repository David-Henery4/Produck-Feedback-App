import { CategoryBox, RoadmapBox } from "."

const Sidebar = ({ isSidebarOpen, children }) => {
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
    </aside>
  );
};

export default Sidebar