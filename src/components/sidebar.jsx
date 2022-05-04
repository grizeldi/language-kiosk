import React from 'react';
import { withTranslation } from 'react-i18next';
import './sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <aside>
                <img src="logo192.png" alt="Gallery logo" className="LogoImg" />
                <div className="info">
                    <ul>
                        <li><img src="slovenia.png" alt="SlovenianFlag" className="flag" /></li>
                        <li><img src="spain.png" alt="SpanishFlag" className="flag" /></li>
                        <li><img src="united-kingdom.png" alt="FlagOfUK" className="flag" /></li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default withTranslation()(Sidebar);