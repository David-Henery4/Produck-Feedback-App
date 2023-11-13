"use client";
import { useEffect } from "react";
import useTheme from "@/hooks/useTheme";
import checkPreferedScheme from "@/hooks/theme-helpers/checkPreferedScheme";

const ThemeInit = () => {
  const { changeTheme, setInitialTheme } = useTheme();
  //
  useEffect(() => {
    setInitialTheme();
  }, []);
  //
  useEffect(() => {
    checkPreferedScheme(changeTheme);
  }, []);
  //
  return <div className="hidden"></div>;
};

export default ThemeInit;
