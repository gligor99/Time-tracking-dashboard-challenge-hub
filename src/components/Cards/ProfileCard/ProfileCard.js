import React, { useEffect, useState } from "react";
import styles from "./profilecard.module.css";
import profileImg from "../../../assets/img/image-jeremy.png";
import { useBetween } from "use-between";

const useShareableState = () => {
  const [buttonData, setButtonData] = useState("daily");

  return {
    buttonData,
    setButtonData,
  };
};

function ProfileCard({ buttons }) {
  const { setButtonData } = useBetween(useShareableState);

  useEffect(() => {
    setButtonData();
  }, [setButtonData]);

  const buttonDataHandler = (e) => {
    const data = e.target.value;
    setButtonData(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile_content}>
        <img src={profileImg} alt={profileImg} />
        <div className={styles.title_container}>
          <p className={styles.subtitle}>Report for</p>
          <p className={styles.title}>Jeremy Robson</p>
        </div>
      </div>
      <div className={styles.profile_option}>
        {buttons.map((button) => (
          <button
            onClick={buttonDataHandler}
            key={button.name}
            value={button.value}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export { ProfileCard, useShareableState };
