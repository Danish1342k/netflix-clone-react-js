import logo from '../images/netflix-logo.png';
import './header.css';

function Header() {
    return (
        <header>
            <div className="head">
                <div className="logo">
                    <img src={logo} alt="Netflix logo" />
                </div>
                <form className='rightside'>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="signinbtn">Signin</button>
                </form>
            </div>
        </header>

    );
}

export default Header;