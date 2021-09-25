import React from "react";
import styles from "./singlecard.module.css";
import workImg from "../../../assets/img/icon-work.svg";

function SingleCard({ title,color, timeframes }) {
  return (
    <div className={styles.container}>
      <div className={styles.card_top} style={{backgroundColor: ""}}>
        <img src={workImg} alt={workImg} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_header}>
          <p>{title}</p>
          <p className={styles.dots}>. . .</p>
        </div>
        <span>{timeframes.daily.current}hrs</span>
        <div className={styles.card_bottom_footer}>
          {`Last week - ${timeframes.daily.previous}hr`}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
