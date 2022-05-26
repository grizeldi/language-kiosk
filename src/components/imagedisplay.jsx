import { t } from 'i18next';
import React from 'react';
import { withTranslation } from 'react-i18next';
import './imagedisplay.css';

class ImageDispay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="image-display">
                <div className="authorInfo">
                    <img src="ArtAuthor.jpg" alt="AuthorImg" className="authorImg" />
                    <p>{t("author")}</p>
                    <p>{t("date")}</p>
                </div>
                <div className="picInfo">
                    <p dangerouslySetInnerHTML={{ __html: t("description") }}></p>
                </div>
            </div>

        );
    }
}

export default withTranslation()(ImageDispay);