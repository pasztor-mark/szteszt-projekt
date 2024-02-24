import {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import axios from 'axios'
import {Arlista, Ar} from '../../arak'
import Footer from '../../components/footer/Footer'
import './Arak.scss'
import Textcard from '../../components/textcard/textcard'

export function Arak() {

    const [ arak, setArak ] = useState([] as Ar[])
    useEffect(() => {
        console.log('Árlista fetch')
        async function load() {
          axios.get('https://api.jsonbin.io/v3/b/65d8abcadc74654018a8cc61/latest?meta=false', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2a$10$mw.8FITl.ZNlkWQLwjL4lO.O1OWX9y63YBpkOxoJRN85FwE1Sd1K.",
                "X-Access-Key": "$2a$10$rgKENAc6q934.zEe8K4UjeZ0Iw2.B2dLPdrZUm9ATm6NCR2/Zxxc."
            }
          }).then(response =>{
            const arlist = response.data as Arlista;
            setArak(arlist.arak);
          })
        }
        load()
      }, [])

    return (
        <>
        <Navbar></Navbar>
        <div className="main">
            <img src={'logo.png'} alt="Logo" className='logo'/>
            <div className="header">
                <h1>Árak</h1>
                    <p>A szolgáltatásaink széles katalógusa, megközelítő minimum és maximum árakkal.
                        Az árak természetesen csak tájékoztató jellegűek, ajánlatkérésért lássa az oldal alján található
                        “Ajánlatkérés” ívet, töltse ki, és hamarosan visszatérünk egy ajánlattal.</p>
                <hr />
            </div>
            <div className="PriceCollection">
                {
                    arak.map(arak =>(<Textcard cim={arak.SzolgNev} minAr={arak.MinAr} maxAr={arak.MaxAr} leiras={arak.Leiras}/>))
                }
            </div>
            <div className="PriceForm">
                <hr />
                <h1>Az autója hálás lesz.</h1>
                <p>Írja be az e-mail címét, küldje el nekünk és felkeressük Önt a további részletekkel.<br></br>Küldés előtt jelölje ki a kívánt szolgáltatást a fentebb található lista elemei közül.</p>
                <div className="emailSender">
                    <input type="text" className='emailInput' placeholder='  pelda@pelda.hu'/>
                    <button className='emailButton'>Kérem az ajánlatot!</button>
                </div>
            </div>
        </div>
        <Footer FooterText="Copyright 2024 HuGyoS Original Bodyworks Ltd. Semmilyen jog nincs fenntartva, csak egy iskolai projekt, legyenek szívesek nem beperelni minket. Minden felhasznált tartalom a jogos szerzőjének tulajdona. Az e-mail nem kerül eltárolásra, nem történik semmi, túl drága az e-mail service"></Footer>
        </>
    )
}
export default Arak