import './Footer.css';

function Footer() {
    return (
        <div className='footerMain'>
            <div className='headone'>
                <h5>Questions? Call 000-800-919-1694</h5>
            </div>
            <div className="footerSide">
                <div className="paragraph">
                    <p>FAQ</p>
                    <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
                <div className="paragraph">
                    <p>Gift Card Terms</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div className="paragraph">
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className="paragraph">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
            </div>
            <form className='bottomSide'>
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <h6>Netflix India</h6>
            </form>
        </div>
    );
}
export default Footer;