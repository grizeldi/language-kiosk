import i18next from 'i18next';
import React from 'react';
import './App.css';
import Header from './components/header';
import ImageDispay from './components/imagedisplay';
import Sidebar from './components/sidebar';
import { uploadLanguage } from './dataUploader';
import { LanguageProcessing } from './languageProcessing';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.language = new LanguageProcessing();
        this.language.addListener(uploadLanguage);
        this.language.addListener((event) => {
            switch (event.language) {
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
        });
    }

    render() {
        return (
            <div className="App">
                <Sidebar />
                <div className="mainbody">
                    <Header />
                    <ImageDispay />
                </div>
            </div>
        );
    }
}

export default App;
