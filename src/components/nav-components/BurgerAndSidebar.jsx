"use client";
import { useEffect, useState } from "react";
import { HamburgerIcon, CloseIcon } from "public/assets/shared";
import { Sidebar, Overlay } from ".";

const BurgerAndSidebar = () => {
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
    <>
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
      <Overlay
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default BurgerAndSidebar;
