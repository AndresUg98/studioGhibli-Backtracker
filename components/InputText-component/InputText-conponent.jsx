import React from "react";
import styles from "./inputText.module.css";
const InputText = (props) => {
  return (
    <input
      className={styles[props.className]}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default InputText;
