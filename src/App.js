import React, {useCallback, useEffect, useMemo} from "react";
import Layout from "./components/Layout/layout";
import {Route} from "react-router-dom";
import Bears from "./components/Bears/Bears";
import SingleBear from "./components/sherd/SingleBear/SingleBear";
import RandomBear from "./components/sherd/SingleBear/RandomBear";
import {useSelector} from "react-redux";
import Favorites from "./components/Favorites/Favorites";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const {error} = useSelector((state) => state.bearsReducer)
        toast.error(error)

    return (
        <>
            <Layout>

                <Route path="/home/bears/:id" exact>
                    <SingleBear/>
                </Route>

                <Route path="/home/bears" exact>
                    <Bears/>
                </Route>

                <Route path="/home/random" exact>git init
                    <RandomBear/>
                </Route>
                <Route path="/favorites" exact>
                    <Favorites/>
                </Route>

            </Layout>
             <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000}/>
            </>
    );
}

export default App;