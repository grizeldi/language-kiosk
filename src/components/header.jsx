import { t } from "i18next";
import React from 'react';
import { withTranslation } from 'react-i18next';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="title">{t("title")}</h1>
            </header>
        );
    }
}

export default withTranslation()(Header);