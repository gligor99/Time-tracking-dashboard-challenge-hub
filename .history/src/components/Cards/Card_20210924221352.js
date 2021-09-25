import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import SingleCard from "./SingleCard/SingleCard";
import styles from "./card.module.css";
import dummyData from "../../data.json";

function Card() {
  return (
      <ProfileCard />
    <div className={styles.grid_container}>
      {dummyData.map((data) => (
        <SingleCard key={data.title} {...data} />
      ))}
    </div>
  );
}

export default Card;
