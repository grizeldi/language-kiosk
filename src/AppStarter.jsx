import React from 'react';
import './AppStarter.css';
import App from './App';
import ReactDOM from "react-dom/client";

class AppStarter extends React.Component {

    startApp(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <App />
        );
    }

    render() {
        return (
            <div className="Background">
                <div className="Box">
                    <h1>Galerija spodnji duplek</h1>
                    <button onClick={() => this.startApp()} class="buttonStart">Start App</button>
                </div>
            </div>
        );
    }
}

export default AppStarter;
