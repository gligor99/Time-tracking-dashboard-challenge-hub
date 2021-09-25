import React from 'react'
import styles from './singlecard.module.css'
import workImg from '../../../assets/img/icon-work.svg'

function SingleCard() {
    return (
        <div>
            <div>
                <img src={workImg} alt={workImg} />
            </div>
            <div>
                <h2>test</h2>
            </div>
        </div>
    )
}

export default SingleCard