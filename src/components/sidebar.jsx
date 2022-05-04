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
                        <li>Test 1</li>
                        <li>Test 2</li>
                        <li>Test 3</li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default withTranslation()(Sidebar);