import { t } from 'i18next';
import React from 'react';
import './imagedisplay.css';

class ImageDispay extends React.Component {
    constructor(props){
        super(props);
        props.language.addListener(this.languageChange);
    }

    render() {
        return (
            <div className="image-display">
                <div className="authorInfo">
                    <img src="ArtAuthor.jpg" alt="AuthorImg" className="authorImg"/>
                    <p>{t("author")}</p>
                    <p>{t("date")}</p>
                </div>
            </div>
        );
    }

    languageChange(event){
        
    }
}

export default ImageDispay;