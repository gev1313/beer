import React from "react";
import Search from "../sherd/Search";
import styles from './Header.module.scss';
import {Link, Route, withRouter} from 'react-router-dom'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import Globe from "../../img/svg/Globe";
import cookies from 'js-cookie'

function Header() {

    const languages = [
        {
            code: 'us',
            name: 'English',
            country_code: 'gb'
        },
        {
            code: 'fr',
            name: 'Français',
            country_code: 'fr'
        },

        {
            code: 'ru',
            name: 'Русский',
            country_code: 'ru'
        },
        {
            code: 'am',
            name: 'Հայաստան',
            country_code: 'am'
        },
    ]


    const currentLanguageCode = cookies.get('i18next') || 'en';

    const { t } = useTranslation();
    return (
        <div className={styles.header}>

            <div className="d-flex justify-content-end">
                <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <Globe/>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <span className="dropdown-item-text">{t('language')}</span>
                        </li>
                        {languages.map(({code, name, country_code}) => (
                            <li key={country_code}>
                                <button className="dropdown-item"
                                        onClick={() => i18next.changeLanguage(code)}
                                        disabled={code === currentLanguageCode}
                                >
                                  <span className={`flag-icon flag-icon-${country_code} mx-2`}
                                        style={{opacity: code === currentLanguageCode ? 0.5 : 1}}
                                  > </span>
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.homeFavorite}>
                <Link className={styles.link} to={"/home"}>
                    {t("home")}
                </Link>
                <Link className={styles.link} to={"/favorites"}>
                    {t("favorite")}
                </Link>

            </div>
            <div className={styles.ContainerBeerBank}>
                <p className={styles.theBeerBank}>{t("The_Beer_Bank")}</p>
                <p className={styles.find}>{t("Find_for_favorite_beer_here")}</p>

                <Route path={["/home", "/home/bears"]} exact>
                    <Search/>
                </Route>

            </div>
        </div>
    )
}

export default withRouter(Header);







