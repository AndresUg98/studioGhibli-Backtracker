import React from "react";
// import image from "../../resources/img/adminn.png";
import styles from "./RoleDescriptionCard.module.css";
const RoleDescriptionCard = (props) => {
  return (
    <div className={styles.roleCard}>
      <div className={styles.roleCardImg}>
        <img src="" alt="" />
      </div>
      <div className={styles.roleCardInfo}>
        <h3 className={styles.rolTitle}> {props.role}</h3>
        <p className={styles.roleDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ex
          illo nesciunt ab tempora tempore expedita rem est? Blanditiis eaque
          animi inventore veritatis porro at et, aliquid mollitia ducimus.
          Consequatur?
        </p>
      </div>
    </div>
  );
};

export default RoleDescriptionCard;
