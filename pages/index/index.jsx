import React from "react";
import styles from "./index.module.css";
import InputText from "../../components/InputText-component/InputText-conponent";
const Home = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>
        Studio Ghibli <br />
        BackOffice
      </h1>
      <form action="" className={styles.form}>
        <InputText placeholder="User" type="text" className="inputUser" />
        <InputText
          placeholder="Password"
          type="password"
          className="inputPassword"
        />
        <input type="submit" value="Login" className={styles.submit} />
      </form>
    </div>
  );
};

export default Home;
