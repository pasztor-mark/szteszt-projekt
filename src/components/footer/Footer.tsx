import { } from 'react'
import './Footer.scss'

export function Footer(props) {
    return (
    <footer className="footerBody">
        <div className="footerElementContainer">
        <p>{props.FooterText}</p>
        </div>
    </footer>
    )
}

export default Footer