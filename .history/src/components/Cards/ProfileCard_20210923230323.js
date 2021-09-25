import React from 'react'
//imports
import profileImg from '../../assets/img/image-jeremy.png'

function ProfileCard() {
    return (
        <div>
            <div>
                <img src={profileImg} alt="profileImg" />
            </div>
            <div>
                <h4>Report for</h4>
            </div>
        </div>
    )
}

export default ProfileCard