import React from "react";
import databiz from "../../assets/images/client-databiz.svg";
import audophile from "../../assets/images/client-audiophile.svg";
import maker from "../../assets/images/client-maker.svg";
import meet from "../../assets/images/client-meet.svg";
import imageHeroDk from "../../assets/images/image-hero-desktop.png";
import style from "./Primary.module.css";

const Primary = () => {
  return (
    <div className={style.primaryContainer}>
      <div className={style.primaryText}>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={style.primaryButton}>Learn more</button>
        <ul className={style.primaryList}>
          <li>
            <img src={databiz} alt="databiz" />
          </li>
          <li>
            <img src={audophile} alt="databiz" />
          </li>
          <li>
            <img src={maker} alt="databiz" />
          </li>
          <li>
            <img src={meet} alt="databiz" />
          </li>
        </ul>
      </div>
      <div className={style.primaryImage}></div>
    </div>
  );
};

export default Primary;
