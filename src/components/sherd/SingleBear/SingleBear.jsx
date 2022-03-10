import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styles from "./SingleBear.module.scss"
import {getSinglBearsRequest} from "../../../store/action-creaters/bearsActionsCreator";
import RandomBear from "./RandomBear";
import LoadingImg from "../../../img/loadingImg/star";

const SingleBear = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const bearData = useSelector(state => state.bearsReducer)
    const error = useSelector(state => state.bearsReducer)

    useEffect(() => {
        dispatch(getSinglBearsRequest(id))
    }, [id])

    if (error.error) {
        return <div className={styles.error}>
            !!! {error.error}
        </div>
    } else if (!bearData.singleBear) {
        return <LoadingImg/>
    }

    return (
        <div className={styles.contayner}>
            <div className={styles.imageInfoContayner}>

                <div className={styles.singleImg}>
                    <img className={styles.img} src={bearData.singleBear.image_url}/>
                </div>
                <div className={styles.beerInfo}>

                    <p className={styles.namePopap}>
                        {bearData.singleBear.name}
                    </p>
                    <p className={styles.taglinePopap}>
                        {bearData.singleBear.tagline}
                    </p>
                    <div className={styles.ibuAbvEbcConteiner}>
                        <div className={styles.ibuAbvEbc}>IBU: {bearData.singleBear.ibu}</div>
                        <div className={styles.ibuAbvEbc}>ABV: {bearData.singleBear.abv}%</div>
                        <div className={styles.ibuAbvEbc}>EBC: {bearData.singleBear.ebc}</div>
                    </div>
                    <p className={styles.description}>
                        {bearData.singleBear.description}
                    </p>
                    <p>
                        <h2 className={styles.bestServedWith}>Best served with:</h2>
                    </p>
                    <ul>
                        <li className={styles.li}>
                            {bearData.singleBear.food_pairing[0]}
                        </li>

                        <li className={styles.li}>
                            {bearData.singleBear.food_pairing[1]}
                        </li>

                        <li className={styles.li}>
                            {bearData.singleBear.food_pairing[2]}
                        </li>

                        <li className={styles.li}>
                            {bearData.singleBear.food_pairing[3] || '---'}
                        </li>
                    </ul>

                </div>

            </div>
            <RandomBear/>
        </div>
    )
}
export default SingleBear
