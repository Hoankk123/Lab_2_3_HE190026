import { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
        borderBottom: darkMode ? "1px solid #555" : "1px solid #ccc",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        transition: "all 0.3s ease",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px" }}>Mini Movie Manager</h1>

      <button
        onClick={toggleTheme}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: darkMode ? "#333" : "#f0f0f0",
          color: darkMode ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px"
        }}
      >
        {darkMode ? (
          <>
            <CiLight /> Light
          </>
        ) : (
          <>
            <MdDarkMode /> Dark
          </>
        )}
      </button>
    </header>
  );
}

export default Header;