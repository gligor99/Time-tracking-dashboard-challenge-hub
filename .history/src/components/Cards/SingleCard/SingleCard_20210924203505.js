import React from "react";
import styles from "./singlecard.module.css";
import workImg from "../../../assets/img/icon-work.svg";

function SingleCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card_top}>
        <img src={workImg} alt={workImg} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_header}>
          <p>Work</p>
          <p>...</p>
        </div>
        <span>32hrs</span>
        <div className={styles.card_bottom_footer}>
          <p>Last week</p>
          {`<p> - </p>`}
          <p>5hr</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
