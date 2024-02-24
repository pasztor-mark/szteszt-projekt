import { } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

export function Footer(props) {
    return (
    <footer className="footerBody">
        <div className="footerElementContainer">
        <p>{props.FooterText}</p>
        <br/>
        <Link to="/adminPage"><a href="#">Belépés adminisztárorként</a></Link>
        </div>
    </footer>
    )
}

export default Footer