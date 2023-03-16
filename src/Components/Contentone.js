import img from '../images/imageone.jpg';
import './Contentone.css';

function Contentone() {
    return (
        <div className="contentOne">
            <div className="text">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, <br />Blu-ray players and more.</p>
            </div>
            <img src={img} />
        </div>
    )
}

export default Contentone;