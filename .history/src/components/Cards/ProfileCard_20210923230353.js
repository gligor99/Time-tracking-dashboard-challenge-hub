import React from "react";
//imports
import profileImg from "../../assets/img/image-jeremy.png";

function ProfileCard() {
  return (
    <div>
      <div>
        <div>
          <img src={profileImg} alt="profileImg" />
        </div>
        <div>
          <h4>Report for</h4>
          <h1>Jeremy Robertson</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
