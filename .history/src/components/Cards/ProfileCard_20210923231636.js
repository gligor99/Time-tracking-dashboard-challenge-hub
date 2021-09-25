import React from "react";
import profileImg from "../../assets/img/image-jeremy.png";
import styled from "styled-components";

function ProfileCard() {
  return (
    <div className="container">
      <div className="wrapper-top">
        <div className="img-card">
          <img src={profileImg} alt="profileImg" />
        </div>
        <div className="headings-card">
          <h4>Report for</h4>
          <h1>Jeremy Robertson</h1>
        </div>
      </div>
      <div className="wrapper-bottom">
          <h3>Daily</h3>
          <h3>Daily</h3>
          <h3>Daily</h3>
      </div>
    </div>
  );
}

export default ProfileCard;
