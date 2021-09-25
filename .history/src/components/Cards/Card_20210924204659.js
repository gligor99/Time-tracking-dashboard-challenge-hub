import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import SingleCard from './SingleCard/SingleCard'
import styles from './card.module.css'

function Card() {
    return (
        <div className={styles.container}>
            <ProfileCard />
            <SingleCard />
        </div>
    )
}

export default Card
