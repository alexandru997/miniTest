import React from 'react';
import {useGetAllCardsQuery} from "../../services/services";
import Card from "../Card/Card";
import styles from './Home.module.css';

const Home = () => {

    const {data: cards} = useGetAllCardsQuery();

    return (
        <div className={styles.homeContainer}>
            {cards && cards.map((item: any) => {
                return (
                    <Card item={item}/>
                )
            })}
        </div>
    );
};

export default Home;
