import React from "react";
import styles from "./singlecard.module.css";
import dots from "../../../assets/img/icon-ellipsis.svg";
import { useBetween } from "use-between";
import { useShareableState } from "../ProfileCard/ProfileCard";

function SingleCard({ title, color, imgSrc, timeframes }) {
  const { buttonData } = useBetween(useShareableState);
  console.log(buttonData)
  const data = `${buttonData}`;
  
  return (
    <div className={styles.container}>
      <div className={styles.card_top} style={{ backgroundColor: `${color}` }}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_header}>
          <p>{title}</p>
          <p className={styles.dots}>
            <img src={dots} alt={dots} />
          </p>
        </div>
        <span>{timeframes.data.current}</span>
        <div className={styles.card_bottom_footer}>
          {`Last week - ${timeframes.daily.previous}hr`}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
