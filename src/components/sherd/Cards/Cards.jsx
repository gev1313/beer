import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Cards.module.scss"
import Star from "../../../img/svg/star";
import LoadingImg from "../../../img/loadingImg/star";
import {useSelector} from "react-redux";

const Cards = ({items,isRandom=false}) => {
    const error = useSelector(state => state.bearsReducer)
    const [isLocaleChanged, setIsLocaleChanged] = useState(false)
    const onStarClick = item => {
        let newFavoritesList
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        const isHaveItem = favorites.some(el => el.id === item.id)
        if (isHaveItem) {
            newFavoritesList = favorites.filter(el => el.id !== item.id)
        } else {
            newFavoritesList = [item, ...favorites]
        }
        localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
        setIsLocaleChanged(!isLocaleChanged)
    }


    return (
        <div className={styles.container}>
            {items.map(item => (
                <div className={styles.cards}>
                    <Link to={`/home/bears/${item.id}`}>
                        <img src={item.image_url}  alt="User img" className={styles.img}/>
                    </Link>
                    <p className={styles.name}>{item.name}</p>
                    {!isRandom && <p className={styles.tagline}>{item.tagline}</p>}

                    <Star className={styles.star}
                          onStarClick={onStarClick}
                          item={item}
                          color={JSON.parse(localStorage.getItem('favorites')).some(el => el.id === item.id) ? "yellow" : "green"}
                    />
                </div>
            ))}
        </div>
    )
}

export default Cards