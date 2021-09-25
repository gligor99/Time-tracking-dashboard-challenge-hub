import React from 'react'
import styles from './singlecard.module.css'
import workImg from '../../../assets/img/icon-work.svg'

function SingleCard() {
    return (
        <div className={styles.container}>
            <div className={styles.card_top}>
                <img src={workImg} alt={workImg} />
            </div>
            <div>
                <div>
                    <p>Work</p>
                    <p>...</p>
                </div>
                <p>322h</p>
                <div>
                    <p>Last week</p>
                    <p>5hr</p>
                </div>
            </div>
        </div>
    )
}

export default SingleCard
