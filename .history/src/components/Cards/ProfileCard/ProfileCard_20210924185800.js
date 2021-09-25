import React from 'react'
import styles from './profilecard.module.css'
import profileImg from '../../../assets/img/image-jeremy.png'

function ProfileCard() {
    return (
        <div className={styles.container}>
            <div className={styles.profile-content}>
                <img src={profileImg} alt={profileImg} />
                <p>Report for</p>
                <p>Jeremy Robson</p>
            </div>
            <div className={styles.profile-option}>
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>
        </div>
    )
}

export default ProfileCard
