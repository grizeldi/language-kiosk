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
                This is where the image will eventually reside.
            </div>
        );
    }

    languageChange(event){
        
    }
}

export default ImageDispay;