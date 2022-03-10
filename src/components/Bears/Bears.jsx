import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Cards from "../sherd/Cards";
import styles from "./Bears.module.scss"
import {getBearsRequest} from "../../store/action-creaters/bearsActionsCreator";
import {useDispatch, useSelector} from "react-redux";
import urlParams from "../utils/utils";
import LoadingImg from "../../img/loadingImg/star";

const Bears = () => {
    const {search} = useLocation();
    const params = urlParams(search);
    const bearsData = useSelector(state => state.bearsReducer)


    const dispatch = useDispatch()

    useEffect(() => {
        if (params?.value) {
            dispatch(getBearsRequest(params?.value, 1))
        }
    }, [params?.value])

    // const resultsFlag = useSelector(state => state.bearsReducer)
    // if (!resultsFlag) {
    //     return <LoadingImg/>
    // }
    return (
        <div className={styles.kontainer}>
            <Cards items={bearsData.bears.items}/>
        </div>

    )
}

export default Bears