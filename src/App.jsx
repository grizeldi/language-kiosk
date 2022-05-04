import Header from './components/header';
import './App.css';
import Sidebar from './components/sidebar';
import ImageDispay from './components/imagedisplay';
import React from 'react';
import { LanguageProcessing } from './languageProcessing';
import { uploadLanguage } from './dataUploader';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.language = new LanguageProcessing();
        this.language.addListener(uploadLanguage);
    }

    render() {
        return (
            
            <div className="App">
                <Sidebar language={this.language}/>
                <div className="mainbody">
                    <Header />
                    <ImageDispay language={this.language}/>
                </div>
            </div>
        );
    }
}

export default App;
