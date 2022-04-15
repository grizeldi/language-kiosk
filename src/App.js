import Header from './components/header';
import './App.css';
import Sidebar from './components/sidebar';
import ImageDispay from './components/imagedisplay';

function App() {
    return (
        <div class="App">
            <Header/>
            <div class="mainbody">
                <Sidebar/>
                <ImageDispay/>
            </div>
        </div>
    );
}

export default App;
