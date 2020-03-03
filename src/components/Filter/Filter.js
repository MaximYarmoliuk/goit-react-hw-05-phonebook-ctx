import React from "react";
import propTypes from "prop-types"
import withTheme from "../../hoc/withTheme";
import styles from "./Filter.module.css"

function Filter({ value, onChangeFilter, style }) {
  return (
    <div style={style}>
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
}

export default withTheme(Filter)
