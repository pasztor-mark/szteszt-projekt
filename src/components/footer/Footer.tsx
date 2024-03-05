import { } from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Footer.scss'

export function Footer(props) {
    return (
        <footer className="footerBody">
            <div className="footerElementContainer">
                <p>{props.FooterText}</p>
                <hr />
                <div className="SocialContainer">
                    <div>
                        <a><FiFacebook /></a>
                    </div>

                    <div>
                        <a><FiInstagram /></a>
                    </div>

                    <div>
                        <a><FiTwitter /></a>
                    </div>

                    <div>
                        <a><FiYoutube /></a>
                    </div>
                </div>
                <Link to="/adminPage"><a href="#">Belépés adminisztárorként</a></Link>
            </div>
        </footer>
    )
}

export default Footer