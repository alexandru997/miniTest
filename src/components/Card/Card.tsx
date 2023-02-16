import React from 'react';
import styles from '../Home/Home.module.css';
import stylesCard from './card.module.css';

const Card = ({item}: any) => {

    return (
        <div className={styles.homeCard}>
            <span>{item.title.rendered}</span>
            <img src={item.image} alt={'img'} className={styles.image}/>

            <div className={stylesCard.containerDescription}>
                <span>{item.description}</span>
                <span style={{display: 'flex', alignItems: "flex-end"}}>{item.date}</span>
            </div>
            <div className={stylesCard.containerButton}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Card;
