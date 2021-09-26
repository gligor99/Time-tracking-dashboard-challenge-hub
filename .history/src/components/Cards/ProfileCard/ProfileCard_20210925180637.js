import React, { useEffect, useState } from "react";
import styles from "./profilecard.module.css";
import profileImg from "../../../assets/img/image-jeremy.png";

function ProfileCard({ buttons }) {
  const [buttonChoose, setButtonChoose] = useState("");

  const fetchButtons = () => {
    const data = buttons.map((button) => {
      const newButton = button;
      setButtonChoose(button);
    });
  };

  useEffect(() => {
    fetchButtons();
  });

  const proba = JSON.stringify(buttonChoose);
  console.log(proba);
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
          <button key={button.name} value={button.value}>
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
