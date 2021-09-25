import React from "react";
import styles from "./singlecard.module.css";
import workImg from "../../../assets/img/icon-work.svg";

function SingleCard({ title, timeframes }) {
  return (
    <div className={styles.container}>
      <div className={styles.card_top}>
        <img src={workImg} alt={workImg} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_header}>
          <p>{title}</p>
          <p>...</p>
        </div>
        <span>32hrs</span>
        <div className={styles.card_bottom_footer}>
          {`Last week - 5hr`}
          {timeframes.daily.current}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
