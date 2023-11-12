const useTheme = () => {
  let htmlEle;
  if (typeof window !== "undefined") {
    htmlEle = document?.documentElement;
  }
  //
  const setInitialTheme = () => {
    if (localStorage.getItem("theme") !== null) {
      const currentSavedTheme = localStorage.getItem("theme");
      changeTheme(currentSavedTheme === "dark");
    } else {
      changeTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  };
  //
  const toggleTheme = () => {
    changeTheme(!htmlEle.classList.contains("dark"));
  };
  //
  const changeTheme = (isDark) => {
    if (isDark) {
      htmlEle.classList.remove("light");
      htmlEle.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlEle.classList.remove("dark");
      htmlEle.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };
  //
  return {
    toggleTheme,
    setInitialTheme,
    changeTheme,
  };
};

export default useTheme;
