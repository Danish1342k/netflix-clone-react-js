import imge from '../images/imagetwo.png';
import './Contenttwo.css';

function Contenttwo() {

    return (
        <div className="contentTwo">
            <img src={imge} />
            <div className="text">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, <br />Blu-ray players and more.</p>
            </div>
        </div>
    )
}

export default Contenttwo;