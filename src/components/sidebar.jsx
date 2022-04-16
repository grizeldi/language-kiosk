import React from 'react';
import './sidebar.css';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        props.language.addListener(this.languageChange);
    }

    render() {
        return (
            <aside>
                <ul>
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                </ul>
            </aside>
        );
    }

    languageChange(event){

    }
}

export default Sidebar;