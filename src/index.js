import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter as Router} from "react-router-dom";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icons.min.css';
import './index.css';
import App from './App';


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ["us", "fr", "ru","am"],
        fallbackLng: "us",
        detection: {
            order: [ 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assents/locales/{{lng}}/translation.json',
        }
    });
const loadingMarkup = (
    <div className="py-4 text-center">
        <h2>Kovik...</h2>
    </div>
)


ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);