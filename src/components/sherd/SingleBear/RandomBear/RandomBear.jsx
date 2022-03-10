import React, {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {getRandomBearRequest} from "../../../../store/action-creaters/bearsActionsCreator"
import {useParams} from "react-router-dom"
import Cards from "../../Cards";

const RandomBear = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const randomData = useSelector(state => state.bearsReducer)
    const oneRandom = randomData.randomBear.slice(0, 3)

    useEffect(() => {
        dispatch(getRandomBearRequest())
        dispatch(getRandomBearRequest())
        dispatch(getRandomBearRequest())
    }, [id])

    return <Cards items={oneRandom}  isRandom={true}/>
}
export default RandomBear