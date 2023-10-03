import React from "react";
import NavBar from "../NavBar/NavBar";
import Primary from "../Primary/Primary";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.mainContainer}>
      <NavBar />
      <Primary />
    </div>
  );
};

export default Main;
