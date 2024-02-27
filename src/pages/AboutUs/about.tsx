import { } from 'react'
import './about.scss'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import TimelineElement from '../../components/TimelineElement/TimelineElement'
import { FiZap, FiTool, FiTrendingUp, FiBriefcase, FiDollarSign, FiAward, FiHash, FiBarChart, FiMap, FiGlobe, FiTruck, FiSun } from "react-icons/fi";
import TeamPhoto from './TeamPhoto.png'

export function About() {
    return (
        <>
            <Navbar />
            <div className="AboutContainer">
                <div className="PlaviBarnus">
                    <div className="textBlock">
                        <h1>HuGyoS Original Bodyworks</h1>
                        <hr />
                        <p>A HuGyoS Original Bodyworks egy szerény vecsési garázsból indult, minimális felszereltséggel és egy nagy álommal. Meguntuk, hogy minden autó ugyanúgy néz ki az utakon, és Magyarországra is elhoztuk az igazi amerikai kozmetikaműhelyek szolgáltatásait.
                            Számos közös projekt után elkezdtünk kitárni szárnyainkat, és két év alatt egy országos autókozmetikai lánccá alakítottuk a kis műhelyünket. Mára több, mint 100 kozmetikai módosítást hajtottunk végre, és 8 kiállítás-értékű pódium projektünk van.</p>
                    </div>
                    <div className="BarnusScreen">
                        <div className='barnusImg'>
                            <img src={TeamPhoto} alt="Barnus." />

                        </div>
                        <div className='ceoDiv'>
                            <hr className='ceoHr' />
                        </div>
                        <div>
                        <div>
                            <h3>Plavecz Barnabás</h3>
                            <p>Chief Executive Officer</p>
                            </div>
                            <div>
                            <h3>Pásztor Márk</h3>
                            <p>Chief Keef Officer</p>
                            </div>
                            <div>
                            <h3>Bogárdi Benedek</h3>
                            <p>Chief Financial Officer</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="TimelineContainer">
                    <h1>A műhely története</h1>
                    <div className="Timeline">
                        <TimelineElement icon={<FiZap />} cim='Kezdet' leiras='Első projektünk egy 20000 forintos lerobbant Suzuki Swift volt, amelyet egyedi külsővel láttunk el.' />
                        <TimelineElement icon={<FiTool />} cim='Kész projekt' leiras='A Swift elkészült, megalapozva a jövőbeli munkáink standardját.' />
                        <TimelineElement icon={<FiTrendingUp />} cim='Népszerűség' leiras='A közösségi média imádta az elkészült kocsit, növekszik a hírnevünk.' />
                        <TimelineElement icon={<FiBriefcase />} cim='Első megbízások' leiras='Megkaptuk az első testreszabó munkánkat, egy M2 matricázását.' />
                        <TimelineElement icon={<FiDollarSign />} cim='Első profitok' leiras='A megbízások növekvő számának köszönhetően befektettünk egy nagyobb garázsba.' />
                        <TimelineElement icon={<FiAward />} cim='Siker' leiras='Több év kitartás és kemény munka gyümölcse, ma már számos szakmai oklevéllel büszkélkedhetünk' />
                    </div>
                    <h1 className='timelineSeparator'>A műhely jövője</h1>
                    <div className="Timeline">
                        <TimelineElement icon={<FiHash />} cim='Népszerűsítés' leiras='Szociális médián erősebb jelenlét kiépítése, a műhely népszerűsítése nagyobb célközönség előtt.' />
                        <TimelineElement icon={<FiBarChart />} cim='Ambíció' leiras='Drágábbnál drágább autókkal történő munkák, vagy akár autók felismerhetetlenségig megváltoztatása.' />
                        <TimelineElement icon={<FiTruck />} cim='Műhelyváltás' leiras='Műhelyünk kibővítése, hogy az eddiginél sokkal több HuGy folyhasson.' />
                        <TimelineElement icon={<FiSun />} cim='Korszerűsítés' leiras='Folyamatosan próbálunk a legújabb technológiákkal rendelkezni, legyen az akár elektromos, vagy hasonló környezetbarát autókkal való munka.' />
                        <TimelineElement icon={<FiMap  />} cim='Új műhelyek' leiras='Országszerte új műhelyek nyitása, ezzel sokkal több ügyfél elérése, ami sokkal több boldog autót jelent.' />
                        <TimelineElement icon={<FiGlobe />} cim='Terjeszkedés' leiras='Más országokban is HuGyoS műhelyek nyitása, nemzetközileg is megtapasztalhatják a boldog ügyfelek kitűnő munkánkat.' />
                    </div>
                </div>
            </div>
            <Footer FooterText="Copyright 2024 HuGyoS Original Bodyworks Ltd. Semmilyen jog nincs fenntartva, csak egy iskolai projekt, legyenek szívesek nem beperelni minket. Minden felhasznált tartalom a jogos szerzőjének tulajdona. Az e-mail nem kerül eltárolásra, nem történik semmi, túl drága az e-mail service" />
        </>
    )
}
export default About