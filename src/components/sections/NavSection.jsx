"use client"
import { useEffect, useState } from "react";
import { Titles, TitleBox, CategoryBox, RoadmapBox, Sidebar, Overlay } from "../nav-components";
import { backgroundHeaderMobile } from "public/assets/suggestions";
import { HamburgerIcon, CloseIcon } from "public/assets/shared";

const NavSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //
  const toggleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  //
  const checkScreenSizeForSidebar = (ev) => {
    if (ev.matches) {
      setIsSidebarOpen(false);
    }
  };
  //
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 45em)");
    checkScreenSizeForSidebar(mq);
    mq.addEventListener("change", checkScreenSizeForSidebar);
    return () => {
      mq.removeEventListener("change", checkScreenSizeForSidebar);
    };
  }, []);
  //
  useEffect(() => {
    if (isSidebarOpen) document.body.classList.add("overflow-y-hidden");
    if (!isSidebarOpen) document.body.classList.remove("overflow-y-hidden");
  }, [isSidebarOpen]);
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
      <div className="lgTab:hidden">
        {isSidebarOpen ? (
          <CloseIcon
            className="relative hover:cursor-pointer hover:rotate-90 transition-all"
            onClick={toggleSidebarClick}
          />
        ) : (
          <HamburgerIcon
            className="relative hover:cursor-pointer"
            onClick={toggleSidebarClick}
          />
        )}
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Overlay isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </nav>
  );
};

export default NavSection