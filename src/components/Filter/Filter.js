import React from "react";
import propTypes from "prop-types";
import withTheme from "../../hoc/withTheme";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter, theme }) {
  const { themeConfig, type } = theme;

  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodybg
      }}
    >
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired
};

export default withTheme(Filter);
