import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import SingleCard from './SingleCard/SingleCard'
import styles from './card.module.css'
import dummyData from '../../data.json'

function Card() {
    return (
        <div className={styles.container}>
            <ProfileCard />
            {dummyData.map((data) => <SingleCard />)}
            
        </div>
    )
}

export default Card
