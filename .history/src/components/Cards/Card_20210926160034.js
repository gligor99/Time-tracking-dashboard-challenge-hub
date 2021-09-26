import React from "react";

import SingleCard from "./SingleCard/SingleCard";
import styles from "./card.module.css";
import dummyData from "../../data.json";

function Card({ buttons }) {
  return (
    <div className={styles.container}>
      <ProfileCard dummyData={dummyData} buttons={buttons} />
      <div className={styles.grid_container}>
        {dummyData.map((data) => (
          <SingleCard key={data.title} {...data} buttons={buttons} />
        ))}
      </div>
    </div>
  );
}

export default Card;
