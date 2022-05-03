import React from 'react';
import './header.css';
import {t} from "i18next";

class Header extends React.Component {

    render() {
        return (
            <header>
                <h1 className="title">{t("title")}</h1>
            </header>
        );
    }
}

export default Header;