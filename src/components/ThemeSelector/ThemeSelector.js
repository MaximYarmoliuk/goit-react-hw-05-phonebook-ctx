import React from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext";
import styles from "./ThemeSelector.module.css";

export default function ThemeSelector({ toggleTheme }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={styles.center}>
          <span className="label">{theme.type}</span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={theme.type === "dark"}
            onChange={() => toggleTheme()}
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
