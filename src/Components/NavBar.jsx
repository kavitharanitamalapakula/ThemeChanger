import React from "react";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={theme === "light" ? "navbar-light" : "navbar-dark"}>
            <h1>My Website</h1>
            <button onClick={toggleTheme} style={{ border: "none" }}>
                {theme === "light" ? "🌙" : "🌟"}
            </button>
        </nav>
    );
};

export default Navbar;
