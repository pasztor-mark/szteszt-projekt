import {useState, useEffect} from 'react'
import './Contact.scss'
import axios from 'axios'
import { Elerhetoseg, Kontakt } from '../../elerhetoseg'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import ContactCard from '../../components/ContactCard/ContactCard'
import { FiHelpCircle, FiMessageCircle, FiClock } from 'react-icons/fi'

export function Contact() {

    const [elerhetosegek, setElerhetosegek] = useState([] as Kontakt[])
    useEffect(() => {
        console.log('Elérhetőség fetch')
        async function load() {
          axios.get('https://api.jsonbin.io/v3/b/65d8e1b7266cfc3fde8e5e58/latest?meta=false', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2a$10$mw.8FITl.ZNlkWQLwjL4lO.O1OWX9y63YBpkOxoJRN85FwE1Sd1K.",
                "X-Access-Key": "$2a$10$rgKENAc6q934.zEe8K4UjeZ0Iw2.B2dLPdrZUm9ATm6NCR2/Zxxc."
            }
          }).then(response =>{
            const elerhetoseglista = response.data as Elerhetoseg;
            setElerhetosegek(elerhetoseglista.elerhetosegek);
          })
        }
        load()
      }, [])

      const icons = [(<FiHelpCircle/>), (<FiMessageCircle/>), (<FiClock/>)]
    return (
        <>
            <Navbar />
            <div className="ContactContainer">
                <div className="HeadlineSection">
                    <div className="title">
                        <h1>Vegye fel velünk a kapcsolatot</h1>
                        <hr />
                        <p>
                            Kérdése van, vagy időpontja, vagy érdeklődne valamely szolgáltatásunkról?<br></br>
                            Lépjen kapcsolatba velünk az itt feltűntetett elérhetőségeken keresztül, a nap 24 órájában fogadunk ügyfeleket, ha kérdésük van.
                        </p>
                    </div>
                    <div className="address">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.59673110825327!2d19.259202391820992!3d47.400875407200694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ea82403ee645%3A0x835f823c79cabda4!2zVmVjc8OpcywgRGXDoWsgRmVyZW5jIHUuIDI3LCAyMjIw!5e0!3m2!1shu!2shu!4v1709134799026!5m2!1shu!2shu" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>
                </div>
                <div className="ContactCards">
                    {
                        elerhetosegek.map(
                            elerhetosegek => (
                            <ContactCard icon={icons[elerhetosegek.id-1]} nev={elerhetosegek.Nev} email={elerhetosegek.Email} tel={elerhetosegek.Tel} cim={elerhetosegek.Cim}/>
                            )
                        )
                    }
                </div>
                <div className="opening">
                    <h1>Nyitvatartás</h1>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <th>Nap</th>
                                <th>Nyitás</th>
                                <th>Zárás</th>
                            </tr>
                            <tr>
                                <td>Hétfő</td>
                                <td>8:00</td>
                                <td>21:30</td>
                            </tr>
                            <tr>
                                <td>Kedd</td>
                                <td>8:00</td>
                                <td>21:00</td>
                            </tr>
                            <tr>
                                <td>Szerda</td>
                                <td>8:00</td>
                                <td>21:00</td>
                            </tr>
                            <tr>
                                <td>Csütörtök</td>
                                <td>8:00</td>
                                <td>21:00</td>
                            </tr>
                            <tr>
                                <td>Péntek</td>
                                <td>9:00</td>
                                <td>20:00</td>
                            </tr>
                            <tr>
                                <td>Szombat</td>
                                <td>10:30</td>
                                <td>19:00</td>
                            </tr>
                            <tr>
                                <td>Vasárnap</td>
                                <td>13:00</td>
                                <td>19:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer FooterText="Copyright 2024 HuGyoS Original Bodyworks Ltd. Semmilyen jog nincs fenntartva, csak egy iskolai projekt, legyenek szívesek nem beperelni minket. Minden felhasznált tartalom a jogos szerzőjének tulajdona." />
        </>
    )
}

export default Contact