import React, {useEffect, useState} from "react";
import styles from "./Favorites.module.scss"
import Cards from "../sherd/Cards";

const Favorites=()=>{

    useEffect(()=> {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        localStorage.setItem('favorites', JSON.stringify(favorites || []));
    },[])


    return (
        <div className={styles.kontainer}>
            <Cards items={JSON.parse(localStorage.getItem('favorites'))} type="bears"/>
        </div>
    )
}
export default Favorites