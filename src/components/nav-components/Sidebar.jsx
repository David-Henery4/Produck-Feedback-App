import { CategoryBox, RoadmapBox } from "."

const Sidebar = ({ isSidebarOpen }) => {
  //
  return (
    <aside
      className={`absolute bg-offWhite top-full right-0 w-3/4 h-[100svh] transition-all p-6 flex flex-col justify-start items-center gap-6 overflow-y-auto lap:hidden ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CategoryBox />
      {/**/}
      <RoadmapBox />
      {/**/}
    </aside>
  );
};

export default Sidebar