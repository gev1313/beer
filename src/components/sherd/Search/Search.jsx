import React, {useState} from "react";
import styles from "./Search.module.scss";
import {useLocation} from "react-router-dom";
import {useParams, useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Search = () => {
    const { t } = useTranslation();
    const {search} = useLocation();
    const params = useParams(search);
    const [inputValue, setInputValue] = useState(params.value || search.slice(7) || "")
    const history = useHistory()
    const handle = (e) => {
        if (e.key === 'Enter') {
            history.push(`/home/bears?value=${e.target.value}`)
        }
    }
    return (

            <input type="text" className={styles.input}
                   placeholder={t("Search_for_beer_name")}
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyUp={handle}
            />

    )
}

export default Search