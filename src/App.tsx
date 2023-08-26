import Navbar from "./Components/Navbar/Navbar";
import CountryLists from "./Components/CountryLists/CountryLists.tsx";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  handleThemeToggle: () => {},
});

function App() {
  const [theme, setTheme] = useState<string>("light");

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleThemeToggle }}>
        <div id={theme === "light" ? "light" : "dark"}>
          <Navbar />
          <CountryLists />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
