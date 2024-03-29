import { useState, useEffect } from 'react'
import './adminpage.scss'
import {Arlista, Ar} from '../../arak'
import {Elerhetoseg, Kontakt} from '../../elerhetoseg'
import axios from 'axios'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import DataDisplay from '../../components/dataDisplay/dataDisplay'


export function AdminPage() {
    //ÁRAK
    const [ arak, setArak ] = useState([] as Ar[])
    const [UpdateAr, setUpdateAr] = useState(false)
    const [arId, setArId] = useState(0)
    const [ arSzolgNev, setArSzolgNev ] = useState('Szolgáltatás')
    const [ arMin, setArMin ] = useState(0)
    const [ arMax, setArMax ] = useState(0)
    const [ arLeiras, setArLeiras ] = useState('Leírás')

    useEffect(() => {
        console.log('Árlista fetch')
        async function load() {
          axios.get('https://api.jsonbin.io/v3/b/65e04dad266cfc3fde90f8ec/latest?meta=false', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
          }).then(response =>{
            const arlist = response.data as Arlista;
            setArak(arlist.arak);
          })
        }
        load()
      }, [])
      useEffect(()=>{
        if (UpdateAr) {
            postAr()
            setUpdateAr(false)
        }
      }, [arak])
      async function postAr(){
        console.log("post kezdés")
        console.log(arak)
        
        const response = await axios.put(`https://api.jsonbin.io/v3/b/65e04dad266cfc3fde90f8ec`, (
            `{
                "arak": ${JSON.stringify(arak)} 
            }`
        ), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(response.data)
      }
      const deleteAr = ids =>
      {
        const tempAr = arak.filter((ar) => ar.id !== ids)
        setArak(tempAr)
        }
      const updateAr = ids => {
        return arak.map(arak => {
            if (arak.id == parseInt(ids)) {
                setUpdateAr(true)
                return {
                    ...arak,
                    SzolgNev: arSzolgNev,
                    MinAr: arMin,
                    MaxAr: arMax,
                    Leiras: arLeiras
                }
            }
            else return {...arak}
        })
    }

    //ELÉRHETŐSÉGEK

    const [ elerhetosegek, setElerhetosegek ] = useState([] as Kontakt[])
    const [UpdateElerhetoseg, setUpdateElerhetoseg] = useState(false)
    const [elId, setElId] = useState(0)
    const [ elNev, setElNev ] = useState('Hosszanti János')
    const [ elEmail, setElEmail ] = useState('pelda@hobw.hu')
    const [ elTel, setElTel ] = useState('')
    const [ elCim, setElCim ] = useState('Cím')

    useEffect(() => {
        console.log('Elérhetőség fetch')
        async function load() {
          axios.get('https://api.jsonbin.io/v3/b/65e04d7d266cfc3fde90f8da/latest?meta=false', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
          }).then(response =>{
            const elerhetoseglista = response.data as Elerhetoseg;
            setElerhetosegek(elerhetoseglista.elerhetosegek);

          })
        }
        load()
      }, [])

      useEffect(()=>{
        if (UpdateElerhetoseg) {
            postElerhetoseg()
            setUpdateElerhetoseg(false)
        }
      }, [elerhetosegek])
      async function postElerhetoseg(){
        console.log("post kezdés")
        console.log(elerhetosegek)
        
        const response = await axios.put(`https://api.jsonbin.io/v3/b/65e04d7d266cfc3fde90f8da`, (
            `{
                "elerhetosegek": ${JSON.stringify(elerhetosegek)} 
            }`
        ), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
        console.log(response.data)
      }
      const deleteElerhetoseg = ids =>
      {
        const tempEl = elerhetosegek.filter((elerhetoseg) => elerhetoseg.id !== ids)
        setElerhetosegek(tempEl)
        }
      const updateElerhetoseg = ids => {
        return elerhetosegek.map(elerhetosegek => {
            if (elerhetosegek.id == parseInt(ids)) {
                setUpdateElerhetoseg(true)
                return {
                    ...elerhetosegek,
                    Nev: elNev,
                    Email: elEmail,
                    Tel: elTel,
                    Cim: elCim
                }
            }
            else return {...elerhetosegek}
        })
    }

    return (
        <>
            <Navbar/>
            <div className="loginNotification">
                <h3 className='loggedInAs'>Bejelentkezve mint: <u>{localStorage.getItem("username")}.</u></h3>
                <button className='logout' onClick={() =>{
                    localStorage.setItem("loggedIn", "false")
                    localStorage.removeItem("username")
                    window.location.reload()
                }}>Kijelentkezés</button>
            </div>
            <div className="Main" id='gradient'>
            
                <div id='TableEditorPanel'>
                    <h2>Árlista</h2>
                    <hr />
                    <h3 style={{textAlign: "center", marginBottom: 15}}>Elemszám: <u>{arak.length}</u></h3>
                    <div className="ContentTable">
                        <div className="setter">
                        <input type='number' placeholder='arId' name="arId" id="arId" style={{backgroundColor: "darkslategray"}} onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setArId(parseInt(e.currentTarget.value))
                                }
                            }}/>
                        <textarea name="arSzolgNev" placeholder='arSzolgNev' id="arSzolgNev" onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setArSzolgNev(e.currentTarget.value)
                                }
                            }}/>
                        <input type='number' placeholder='arMinAr' name="arMinAr" id="arMinAr" onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setArMin(parseInt(e.currentTarget.value))
                                }
                            }}/>
                        <input type='number' placeholder='arMaxAr' name="arMaxAr" id="arMaxAr" onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setArMax(parseInt(e.currentTarget.value))
                                }
                            }}/>
                        <textarea name="arLeiras" id="arLeiras" placeholder='arLeiras' onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setArLeiras(e.currentTarget.value)
                                }
                            }}/>

                        <button onClick={() =>setArak(updateAr(arId))} className='addBtn'>Frissítés</button>
                        <button onClick={() =>{
                            setArak([...arak, {id: arak.length+1, SzolgNev: arSzolgNev, MinAr: arMin, MaxAr: arMax, Leiras: arLeiras}])
                            setUpdateAr(true)
                        }
                            } className='addBtn'>Hozzáadás</button>
                        <button onClick={() =>{
                            deleteAr(arId)
                            setUpdateAr(true)
                        }} className='deleteBtn'>Törlés</button>
                        </div>
                        <div className="tbl">
                        {
                        arak.map(
                            arak => (<DataDisplay data1={arak.SzolgNev} data2={arak.MinAr} data3={arak.MaxAr} data4={arak.Leiras} idData={arak.id}/>)
                            )
                        }
                        </div>
                    </div>

                </div>
                <div id='TableEditorPanel'>
                <h2>Elérhetőségek</h2>
                    <hr />
                    <div className="ContentTable">
                    <h3 style={{textAlign: "center", marginBottom: 15}}>Elemszám: <u>{elerhetosegek.length}</u></h3>
                        <div className="setter">
                        <input type='number' placeholder='elId' name="elId" id="elId" style={{backgroundColor: "darkslategray"}} onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setElId(parseInt(e.currentTarget.value))
                                }
                            }}/>
                        <textarea name="elNev" placeholder='elNev' id="elNev" onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setElNev(e.currentTarget.value)
                                }
                            }}/>
                        <textarea placeholder='elEmail' name="elEmail" id="elEmail" onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setElEmail(e.currentTarget.value)
                                }
                            }}/>
                        <textarea placeholder='elTel' name="elTel" id="elTel" onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setElTel(e.currentTarget.value)
                                }
                            }}/>
                        <textarea name="elCim" id="elCim" placeholder='elCim' onChange={e => {
                                {
                                    e.currentTarget.value.length == 0 ? {} : setElCim(e.currentTarget.value)
                                }
                            }}/>

                        <button className='addBtn' onClick={() =>setElerhetosegek(updateElerhetoseg(elId))}>Frissítés</button>
                        <button className='addBtn' onClick={() =>{
                            setElerhetosegek([...elerhetosegek, {id: elerhetosegek.length+1, Nev: elNev, Email: elEmail, Tel: elTel, Cim: elCim}])
                            setUpdateElerhetoseg(true)
                        }
                            }>Hozzáadás</button>
                        <button className='deleteBtn' onClick={() =>{
                            deleteElerhetoseg(elId)
                            setUpdateElerhetoseg(true)
                        }}>Törlés</button>
                        </div>
                        <div className="tbl">
                        {
                        elerhetosegek.map(
                            elerhetosegek => (<DataDisplay data1={elerhetosegek.Nev} data2={elerhetosegek.Email} data3={elerhetosegek.Tel} data4={elerhetosegek.Cim} idData={elerhetosegek.id}/>)
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
            <Footer FooterText="HuGyoS Original Bodyworks Weboldal Adminisztrátori részlege. Kizárólag engedélyezett hozzáférés."/>
        </>
    )
}

export default AdminPage