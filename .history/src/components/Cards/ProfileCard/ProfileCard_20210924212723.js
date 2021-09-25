import React from "react";
import styles from "./profilecard.module.css";
import profileImg from "../../../assets/img/image-jeremy.png";

const buttons = [
  {
    name: "Daily",
    value: "Daily",
  },
  {
    name: "Weekly",
    value: "Weekly",
  },
  {
    name: "Monthly",
    value: "Monthly",
  },
];

function ProfileCard({ dummyData }) {
  const handleClick = (name) => {
    let filterCoffee = [];
    if (name === "All") {
      filterCoffee = this.state.coffees;
    } else {
      filterCoffee = this.state.coffees.filter(
        (coffee) => coffee.origin === name
      );
    }

    this.setState({ filterCoffee });
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
          <button key={button.name} value={button.value}>
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;