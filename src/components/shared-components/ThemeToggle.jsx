"use client"
import { useEffect, useState } from "react";
import useTheme from "@/hooks/useTheme";
import checkPreferedScheme from "@/hooks/theme-helpers/checkPreferedScheme";

const ThemeToggle = () => {
  const { toggleTheme, changeTheme, setInitialTheme } = useTheme();
  //
  useEffect(() => {
    setInitialTheme();
  }, []);
  //
  useEffect(() => {
    checkPreferedScheme(changeTheme);
  }, []);
  //
  return (
    <div
      className="relative w-14 h-6 rounded-3xl hover:cursor-pointer bg-lightGray dark:bg-purple"
      onClick={() => {
        toggleTheme();
      }}
    >
      <div
        className="h-3/4 w-[18px] absolute left-1/2 top-1/2 transition-all -translate-y-1/2 rounded-full bg-white dark:translate-x-[6px] -translate-x-6"
      ></div>
    </div>
  );
}

export default ThemeToggle