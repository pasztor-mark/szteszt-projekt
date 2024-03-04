import {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import axios from 'axios'
import {Arlista, Ar} from '../../arak'
import Footer from '../../components/footer/Footer'
import './Arak.scss'
import Textcard from '../../components/textcard/textcard'
import CartTab from '../../components/CartTab/CartTab'


export function Arak() {

    const [ arak, setArak ] = useState([] as Ar[])
    const [cart, setCart] = useState([] as string[])
    async function callStorageEvent() {
        var temp = [] as string[]
        await setCart([...cart])
        for (var i = 0; i < localStorage.length; i++) {
            const item = localStorage.getItem(`cart${i+1}`)
            if (item != null) {
                await temp.push(JSON.parse(item))
            }
        }
        await console.log(temp)
        await setCart(temp)
    }
    useEffect(() => {
        console.log('Árlista fetch')
        async function load() {
          axios.get('https://api.jsonbin.io/v3/b/65e04dad266cfc3fde90f8ec/latest?meta=false', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

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
            <CartTab cartContent={cart as []}/>
            <img src={'logo.png'} alt="Logo" className='logo'/>
            <div className="header">
                <h1>Árak</h1>
                <p>A szolgáltatásaink széles katalógusa, megközelítő minimum és maximum árakkal.
                        Az feltüntetett árak csak tájékoztató jellegűek, ajánlatkérésért töltse az oldal alján található
                        “Ajánlatkérés” ívet. Ezután 2 munkanapon belül felvesszük önnel a kapcsolatot.</p>
                <hr />
            </div>
            <div className="PriceCollection">
                {
                    arak.map(arak =>(<Textcard cim={arak.SzolgNev} minAr={arak.MinAr} maxAr={arak.MaxAr} leiras={arak.Leiras} cartId={arak.id} callEvent={callStorageEvent}/>))
                }
            </div>
            <div className="PriceForm">
                <h1>Az autója hálás lesz.</h1>
                <p>Töltse ki az alábbi mezőt az email címével, és mi felkeressük Önt a további részletekkel.<br></br>Küldés előtt jelölje ki a kívánt szolgáltatásokat a fentebb található lista elemei közül.</p>
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