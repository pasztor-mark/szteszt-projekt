import {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import './ValidationForm.scss'

export function ValidationForm() {

    const [adUser, setAdUser] = useState("")
    const [adPw, setAdPw] = useState("")

    function checkCredentials() {
        if (adUser=="admin" && adPw == "admin"){
            localStorage.setItem("loggedIn", "true")
            localStorage.setItem("username", adUser)
            window.location.reload()
        }
        else {
            localStorage.setItem('loggedIn', "false")
        }
    }
    return (
        <>
        <Navbar/>
            <div className="MainForm">
                <div>
                <h1>Adminiszrátori felület</h1>
                <p>Csak jogosult belépéssel!</p>
                </div>
                <div className="LoginCont">
                    <input type="text" placeholder='Felhasználónév' onChange={e =>{
                        setAdUser(e.currentTarget.value)
                    }}/>
                    <input type="password" placeholder='Jelszó' onChange={e =>{
                        setAdPw(e.currentTarget.value)
                    }}/>
                    <button onClick={()=>checkCredentials()}>Belépés</button>
                </div>
            </div>
            <Footer FooterText="Csak jogosult belépéssel elérhető.... Felhasználó lehet hogy admin... Talán a jelszó is... idk tho  ... nincs biztonsági felelőtlenség ha nincs rá szükség 🤷‍♂️"/>
        </>
    )
}
export default ValidationForm