import {useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import './ValidationForm.scss'

export function ValidationForm() {

    const [adUser, setAdUser] = useState("")
    const [adPw, setAdPw] = useState("")
    const [checked, check] = useState(false)

    function isValid() {
        if (adUser === "admin" && adPw === "admin") {
            return true
        }
        else return false
    }

    function checkCredentials() {
        if (isValid()) {
            localStorage.setItem("loggedIn", "true")
            localStorage.setItem("username", adUser)
            window.location.reload()
            return true
        }
        else {
            localStorage.setItem('loggedIn', "false")
            return false
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
                    <p style={{color: "red", fontSize: 20, position: 'absolute', paddingTop: "250px", display: (isValid() || !checked ? 'none' : 'inline')}}>Helytelen belépési adatok!</p>
                    <button onClick={()=>{checkCredentials(); check(!checked)}}>Belépés</button>
                </div>
            </div>
            <Footer FooterText="Csak jogosult belépéssel elérhető.... Felhasználó lehet hogy admin... Talán a jelszó is... idk tho  ... nincs biztonsági felelőtlenség ha nincs rá szükség 🤷‍♂️"/>
        </>
    )
}
export default ValidationForm