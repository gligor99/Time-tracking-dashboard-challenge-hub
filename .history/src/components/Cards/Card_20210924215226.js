import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import SingleCard from "./SingleCard/SingleCard";
import styles from "./card.module.css";
import dummyData from "../../data.json";

function Card() {
  return (
    <div className={styles.grid}>
      <div className={styles.item1}>
        <ProfileCard dummyData={dummyData} />
      </div>

      <div className={styles.item}>
        {dummyData.map((data) => (
          <SingleCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Card;
