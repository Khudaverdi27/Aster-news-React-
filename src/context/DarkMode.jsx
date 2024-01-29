import { createContext, useContext } from "react";

const Theme = createContext();

const DarkModeProvider = ({ children }) => {
  const handleChange = (checked) => {
    document.documentElement.classList.toggle("dark", checked);
    document.querySelector("body").classList.toggle("darkMode", checked);
  };

  const styles = {
    handleChange,
  };

  return <Theme.Provider value={styles}>{children}</Theme.Provider>;
};

export const useDarkMode = () => useContext(Theme);
export default DarkModeProvider;
