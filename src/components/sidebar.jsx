import i18next from 'i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';
import './sidebar.css';

class Sidebar extends React.Component {
    changeLanguage(language) {
        switch (language) {
            case "english":
                i18next.changeLanguage("en");
                break;
            case "slovenian":
                i18next.changeLanguage("si");
                break;
            case "spanish":
                i18next.changeLanguage("es");
                break;
        }
    }

    render() {
        return (
            <aside>
                <img src="logo192.png" alt="Gallery logo" className="LogoImg" />
                <h2>Galerija spodnji duplek</h2>
                <div className="info">
                    <ul>
                        <li onClick={() => this.changeLanguage("slovenian")}><img src="slovenia.png" alt="SlovenianFlag" className="flag" /></li>
                        <li onClick={() => this.changeLanguage("english")}><img src="united-kingdom.png" alt="FlagOfUK" className="flag" /></li>
                        <li onClick={() => this.changeLanguage("spanish")}><img src="spain.png" alt="SpanishFlag" className="flag" /></li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default withTranslation()(Sidebar);