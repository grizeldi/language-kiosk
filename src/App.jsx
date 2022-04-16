import Header from './components/header';
import './App.css';
import Sidebar from './components/sidebar';
import ImageDispay from './components/imagedisplay';
import React from 'react';
import { LanguageProcessing } from './languageProcessing';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.language = new LanguageProcessing();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="mainbody">
                    <Sidebar language={this.language}/>
                    <ImageDispay language={this.language}/>
                </div>
            </div>
        );
    }
}

export default App;