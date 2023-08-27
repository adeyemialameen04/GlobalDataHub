import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import RoutesManager from "./Components/RoutesManager.tsx";

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
    <Router>
      <ThemeContext.Provider value={{ theme, handleThemeToggle }}>
        <div id={theme === "light" ? "light" : "dark"}>
          <Navbar />
          <RoutesManager />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
