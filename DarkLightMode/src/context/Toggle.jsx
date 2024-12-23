import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function Toggle(props) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default Toggle;
