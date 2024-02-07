import {} from 'react'
import './landing.css'
import Logo from './images/logo.png'
import SLogo from './images/suzuki.png'
import DLogo from './images/dodge.png'
import BLogo from './images/bmw.png'
import RLogo from './images/renault.png'
import HLogo from './images/honda.png'
import ALogo from './images/alpine.png'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'

export function Landing() {
    return (
        <>
        <Navbar/>
        <div className="PageContainer">
            <div className="HeadlineScreen">
                <div className="headline">
                    <img src={Logo} alt="Logo" className='logo'/>
                    <h1>A legjobbat<br/>vagy semmit.</h1>
                    <hr />
                    <p>Magyarország vezető autókozmetikai lánca, több millió elégedett ügyféllel, és megszépült autóval.  Kérj ajánlatot karosszéria-karbantartásra, matricázásra, vagy akár egy teljesen új, egyedi karosszériára a HuGyoS Original Bodyworks-nél!</p>
                    <a href="#">
                        <button>LÁSSAM AZ ÁRAKAT</button>
                    </a>
                </div>
            </div>
            <div className="SponsorScreen">
                <h3>PARTNERCÉGEINK</h3>
                <p>Világhírű autómárkák, amelyek hisznek abban, hogy a műhelyeinkben a tőlük elvárt minőséghez mérhető eredményt kaphatsz, és együtt dolgoznak velünk.</p>
                <hr />
                <div className="SponsorLogos">
                    <span><img src={SLogo} alt="Suzuki Motorsports" /></span>
                    <span><img src={DLogo} alt="Dodge" /></span>
                    <span><img src={BLogo} alt="BMW Motorsports" /></span>
                    <span><img src={RLogo} alt="Renault Sport" /></span>
                    <span><img src={HLogo} alt='Honda Motorsports'/></span>
                    <span><img src={ALogo} alt='Alpine'/></span>
                </div>
            </div>
            <Footer FooterText="Copyright 2024 HuGyoS Original Bodyworks Ltd. Semmilyen jog nincs fenntartva, csak egy iskolai projekt, legyenek szívesek nem beperelni minket. Minden felhasznált tartalom a jogos szerzőjének tulajdona."/>
        </div>
        </>
    )
}
export default Landing