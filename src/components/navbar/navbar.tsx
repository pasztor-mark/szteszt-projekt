import { } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import './navbar.css'

export function Navbar() {
    const [sideShown, setSide] = useState(true)
    return (
        <>
            <nav className='UpperContainer' id='gradient'>
                
                    <ul className='NavLinks'>
                        <div className="LogoCont">
                            <Link to="/">
                            <a href="#" style={{fontSize: 80}}>
                                <img src='logo.png' alt="Logo" />
                            </a>
                            </Link>
                        </div>
                        <li></li>
                        <li><a href="#" id='nlink'>Kezdőlap<hr /></a></li>
                        <li><a href="#" id='nlink'>Galéria<hr /></a></li>
                        <li><a href="#" id='nlink'>Árak<hr /></a></li>
                        <li><a href="#" id='nlink'>Kapcsolat<hr /></a></li>
                    </ul>
            </nav>
            <nav className='SideContainer' id={sideShown ? 'sideActive' : 'sideInactive'}>
                <div>
                    <div className="LogoCont">
                        <a href="#" style={{fontSize: 100}}>
                        <img src="https://media.discordapp.net/attachments/1200923236364456017/1204160855097483335/hugyos.png?ex=65d3b930&is=65c14430&hm=948dd67f6162116f8f8b0e91c0926c591d731c58921df087610ee98505c2d4df&=&format=webp&quality=lossless" alt="Logo" />
                        </a>
                    </div>
                </div>
                <ul className='NavLinks'>
                        <li><a href="#" id='nlink'>Kezdőlap<hr /></a></li>
                        <li><a href="#" id='nlink'>Galéria<hr /></a></li>
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