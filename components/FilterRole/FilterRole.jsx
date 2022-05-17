import React from "react";
import styles from "./FilterRole.module.css";
const FilterRole = (props) => {
  return (
    <div>
      <h2>{props.filter}</h2>
      <select name="" id="" className={styles.select}>
        <option value="">Administrator</option>
        <option value="">General</option>
      </select>
    </div>
  );
};

export default FilterRole;
