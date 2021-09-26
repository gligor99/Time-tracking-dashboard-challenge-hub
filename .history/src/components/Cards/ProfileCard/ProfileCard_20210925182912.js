import React from "react";
import styles from "./profilecard.module.css";
import profileImg from "../../../assets/img/image-jeremy.png";

function ProfileCard({ buttons }) {

  const clickHandler = () => {
    if(buttons.value === 'daily') {
      console.log('daily izabran')
    }else{
      console.log('pokucan daily')
    }
    if(buttons.value === 'monthly') {
      console.log('monthly izabran')
    }else{
      console.log('pokucan monthly')
    }
    if(buttons.value === 'weekly') {
      console.log('weekly izabran')
    }else{
      console.log('pokucan weekly')
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
          <button onClick={clickHandler} key={button.name} value={button.value}>
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
