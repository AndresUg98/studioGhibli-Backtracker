import React from "react";
import styles from "./roles.module.css";
import FilterRole from "../../components/FilterRole/FilterRole";

import RoleDescriptionCard from "../../components/RoleDescriptionCard/RoleDescriptionCard";
const Roles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <h1>Roles</h1>
        <div className={styles.filterSelect}>
          <FilterRole filter="Sort by" />
          <FilterRole filter="Order by" />
        </div>
      </div>
      <div className={styles.resultsSection}>
        <div className={styles.resultsContainer}>
          <RoleDescriptionCard role="Administrator" />
          <RoleDescriptionCard role="General" />
          <RoleDescriptionCard role="Administrator" />
          <RoleDescriptionCard role="General" />
        </div>
      </div>
    </div>
  );
};

export default Roles;
