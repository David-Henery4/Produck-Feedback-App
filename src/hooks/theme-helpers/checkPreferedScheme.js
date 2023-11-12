

const checkPreferedScheme = (changeTheme) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleThemeChange = ({ matches }) => {
    changeTheme(matches);
  };
  mediaQuery.addEventListener("change", handleThemeChange);
  //
  return () => {
    mediaQuery.removeEventListener("change", handleThemeChange);
  };
}

export default checkPreferedScheme