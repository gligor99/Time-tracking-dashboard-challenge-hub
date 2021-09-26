import React, { useEffect, useState } from "react";
import styles from "./profilecard.module.css";
import profileImg from "../../../assets/img/image-jeremy.png";
import { useBetween } from "use-between";

const useShareableState = () => {
  const [buttonData, setButtonData] = useState("daily");
  const [isActive, setIsActive] = useState(false)
  return {
    buttonData,
    setButtonData,
    isActive,
    setIsActive
  };
};

function ProfileCard({ buttons }) {
  const { buttonData, setButtonData, isActive, setIsActive } = useBetween(useShareableState);

  useEffect(() => {
    setButtonData();
  }, [setButtonData]);

  const buttonDataHandler = (e) => {
    const data = e.target.value;
    setButtonData(data);
  };

  const activeButton = (e) => {
    const data = e.target.value;
    if(data === buttonData) {
      setIsActive(true)
    }
  }

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
            onClick={() => {{buttonDataHandler(); activeButton();}}}
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
