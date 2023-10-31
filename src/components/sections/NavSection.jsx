import { Titles, TitleBox, CategoryBox, RoadmapBox, BurgerAndSidebar } from "../nav-components";
import { backgroundHeaderMobile } from "public/assets/suggestions";


const NavSection = () => {
  console.log("navSection:server")
  //
  return (
    <nav className="relative w-full col-start-1 col-end-13 px-6 py-4 flex justify-between items-center text-white smTab:px-10 lgTab:col-start-2 lgTab:col-end-12 lgTab:p-0 lgTab:mb-10 lap:col-start-2 lap:col-end-3 lap:row-start-1 lap:row-end-3 lap:m-0 lap:max-w-[225px]">
      <div className="lgTab:hidden">
        <Titles />
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full lgTab:hidden"
        src={backgroundHeaderMobile.src}
        alt="header background gradient"
      />
      <div className="hidden w-full justify-between items-center h-full gap-[10px] lgTab:flex lap:flex-col">
        <TitleBox />
        <CategoryBox />
        <RoadmapBox />
      </div>

      {/* SIDEBAR & BURGER MENU */}
      <BurgerAndSidebar>
        <RoadmapBox />
      </BurgerAndSidebar>
    </nav>
  );
};

export default NavSection