import { createContext, useContext, useEffect, useState } from "react";
import { getStorage, removeStorage, saveStorage } from "../storage/storage";

const Theme = createContext();

const DarkModeProvider = ({ children }) => {
  const mode = getStorage("theme");
  useEffect(() => {
    const isDarkMode = mode === "dark";

    document.documentElement.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("darkMode", isDarkMode);
  }, []);

  const handleChange = (checked) => {
    const theme = checked ? "dark" : "light";
    saveStorage("theme", theme);

    document.documentElement.classList.toggle("dark", checked);
    document.body.classList.toggle("darkMode", checked);
  };

  const styles = {
    handleChange,
  };

  return <Theme.Provider value={styles}>{children}</Theme.Provider>;
};

export const useDarkMode = () => useContext(Theme);
export default DarkModeProvider;
