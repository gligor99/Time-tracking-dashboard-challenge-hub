import React from "react";
import styles from "./singlecard.module.css";
import dots from '../../../assets/img/icon-ellipsis.svg'

function SingleCard({ title, color, imgSrc, timeframes }) {
  return (
    <div className={styles.container}>
      <div className={styles.card_top} style={{ backgroundColor: `${color}` }}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_header}>
          <p>{title}</p>
          <p className={styles.dots}><a><img src={dots} alt={dots} /></a></p>
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
