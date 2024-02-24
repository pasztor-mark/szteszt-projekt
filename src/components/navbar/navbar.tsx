import { } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import './navbar.scss'

export function Navbar() {
    const [sideShown, setSide] = useState(true)
    return (
        <>
            <nav className='UpperContainer' id='gradient'>
                
                    <ul className='NavLinks'>
                        <div className="LogoCont">
                            <Link to="/">
                            <a href="#">
                                <img src='logo.png' alt="Logo" />
                            </a>
                            </Link>
                        </div>
                        <li></li>
                        <li><a href="#" id='nlink'>Kezdőlap<hr /></a></li>
                        <li><a href="#" id='nlink'>Rólunk<hr /></a></li>
                        <li><a href="#" id='nlink'>Galéria<hr /></a></li>
                        <li><a href="#" id='nlink'>Árak<hr /></a></li>
                        <li><a href="#" id='nlink'>Kapcsolat<hr /></a></li>
                    </ul>
            </nav>
            <nav className='SideContainer' id={sideShown ? 'sideActive' : 'sideInactive'}>
                <div>
                    <div className="LogoCont">
                    <Link to="/">
                            <a href="#" style={{fontSize: 100}}>
                                <img src='logo.png' alt="Logo" />
                            </a>
                            </Link>
                    </div>
                </div>
                <ul className='NavLinks'>
                        <li><a href="#" id='nlink'>Kezdőlap<hr /></a></li>
                        <li><a href="#" id='nlink'>Galéria<hr /></a></li>
                        <li><a href="#" id='nlink'>Rólunk<hr /></a></li>
                        <li><a href="#" id='nlink'>Árak<hr /></a></li>
                        <li><a href="#" id='nlink'>Kapcsolat<hr /></a></li>
                </ul>
            </nav>
            <div className="SidebarToggler" id={sideShown ? 'togglerActive' : 'togglerInactive'}>
                <a onClick={() => setSide(!sideShown)}><FiMenu/></a>
            </div>
        </>
    )
}
export default Navbar