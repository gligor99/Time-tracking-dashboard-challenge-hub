import React from "react";
import styles from "./singlecard.module.css";
import dots from "../../../assets/img/icon-ellipsis.svg";
import { useBetween } from "use-between";
import { useShareableState } from "../ProfileCard/ProfileCard";

function SingleCard({ title, color, imgSrc, timeframes }) {
  const { buttonData } = useBetween(useShareableState);
  const data = JSON.parse(buttonData)
  console.log(data)
  
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
        <span>{timeframes.daily.current}</span>
        <div className={styles.card_bottom_footer}>
          {/* {`Last week - ${timeframes.`${buttonData}`.previous}hr`} */}
          {`${buttonData}.${buttonData}`}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
