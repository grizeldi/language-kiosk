import i18n from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import App from './App';
import AppStarter from './AppStarter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { translations } from './translations';

i18n.use(initReactI18next).init(translations);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppStarter />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();