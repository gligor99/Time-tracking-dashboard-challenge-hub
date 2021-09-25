import React from 'react'
import styles from './profilecard.module.css'
import profileImg from '../../../assets/img/image-jeremy.png'

function ProfileCard() {
    return (
        <div className={styles.container}>
            <div>
                <img src={profileImg} alt={profileImg} />
            </div>
        </div>
    )
}

export default ProfileCard
