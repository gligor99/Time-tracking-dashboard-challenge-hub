import React from "react";
import styles from "./singlecard.module.css";
import dots from "../../../assets/img/icon-ellipsis.svg";
import { useBetween } from "use-between";
import { useShareableState } from "../ProfileCard/ProfileCard";

function SingleCard({ title, color, imgSrc, timeframes }) {
  const { buttonData, setButtonData } = useBetween(useShareableState);
  console.log(buttonData);

  const timeCurrent = () => {
    setButtonData(buttonData);
    if (buttonData === "daily") {
      const time = timeframes.daily.current;
      return time;
    }
    if (buttonData === "monthly") {
      const time = timeframes.monthly.current;
      return time;
    }
    if (buttonData === "weekly") {
      const time = timeframes.weekly.current;
      return time;
    }
  };

  const timePrevious = () => {
    setButtonData(buttonData);
    if (buttonData === "daily") {
      const time = timeframes.daily.previous;
      return time;
    }
    if (buttonData === "monthly") {
      const time = timeframes.monthly.previous;
      return time;
    }
    if (buttonData === "weekly") {
      const time = timeframes.weekly.previous;
      return time;
    }
  };
  }

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
        <span>{timeCurrent()}hrs</span>
        <div className={styles.card_bottom_footer}>
          {`Last week - ${timeframes.daily.previous}hr`}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
