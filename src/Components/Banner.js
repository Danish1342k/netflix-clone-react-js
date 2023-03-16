import './Banner.css';

function Banner() {
    return (
        <div className="ourContent">
            <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="inputs">
                <input type="text" placeholder="Email Address" />
                <button className="getstartbtn">Get Started</button>
            </div>
        </div>
    )
}

export default Banner;