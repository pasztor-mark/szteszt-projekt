import { } from 'react'
import { NavLink } from 'react-router-dom'
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
                            <NavLink to="/">
                            <a href="#">
                                <img src='logo.png' alt="Logo" />
                            </a>
                            </NavLink>
                        </div>
                        <li></li>
                        <li><NavLink to="/"><a id='nlink'>Kezdőlap<hr /></a></NavLink></li>
                        <li><NavLink to="/about"><a href="#" id='nlink'>Rólunk<hr /></a></NavLink></li>
                        <li><NavLink to="/galeria"><a href="#" id='nlink'>Galéria<hr /></a></NavLink></li>
                        <li><NavLink to="/arak"><a id='nlink'>Árak<hr /></a></NavLink></li>
                        <li><NavLink to="/contact"><a href="#" id='nlink'>Kapcsolat<hr /></a></NavLink></li>
                    </ul>
            </nav>
            <nav className='SideContainer' id={sideShown ? 'sideActive' : 'sideInactive'}>
                <div>
                    <div className="LogoCont">
                    <NavLink to="/">
                            <a href="#" style={{fontSize: 100}}>
                                <img src='logo.png' alt="Logo" />
                            </a>
                            </NavLink>
                    </div>
                </div>
                <ul className='NavLinks'>
                        <li><NavLink to="/"><a id='nlink'>Kezdőlap<hr /></a></NavLink></li>
                        <li><NavLink to="/galeria"><a href="#" id='nlink'>Galéria<hr /></a></NavLink></li>
                        <li><NavLink to="/about"><a href="#" id='nlink'>Rólunk<hr /></a></NavLink></li>
                        <li><NavLink to="/arak"><a id='nlink'>Árak<hr /></a></NavLink></li>
                        <li><NavLink to="/contact"><a href="#" id='nlink'>Kapcsolat<hr /></a></NavLink></li>
                </ul>
            </nav>
            <div className="SidebarToggler" id={sideShown ? 'togglerActive' : 'togglerInactive'}>
                <a onClick={() => setSide(!sideShown)}><FiMenu/></a>
            </div>
        </>
    )
}
export default Navbar