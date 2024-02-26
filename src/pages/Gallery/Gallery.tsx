import { } from 'react'
import './Gallery.scss'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/Footer'
import SliderImage from '../../components/sliderimage/sliderimage'

import m2before from './images/m2/before.png'
import m2after from './images/m2/after.png'

import mk5Before from './images/supra/before.png'
import mk5After from './images/supra/after.png'

import alpineBefore from './images/alpine/before.png'
import alpineAfter from './images/alpine/after.png'

import gtBefore from './images/fordgt/before.png'
import gtAfter from './images/fordgt/after.png'

import abarthBefore from './images/abarth/before.png'
import abarthAfter from './images/abarth/after.png'

import amcBefore from './images/amc/before.png'
import amcAfter from './images/amc/after.png'

import cadillacBefore from './images/cadillac/before.png'
import cadillacAfter from './images/cadillac/after.png'

import astonBefore from './images/valour/before.png'
import astonAfter from './images/valour/after.png'

export function Gallery() {

    return (
        <>
            <Navbar />
            <div className="GalleryContainer">
                <div className="HeadlineImage">
                </div>
                <div className="HeadlineDescription">
                    <div className="HeadlineText">
                        <hr className="sectionBreak"/>
                        <h1>Egyedi Cadillac Fleetwood</h1>
                        <hr className="sectionBreak"/>
                    </div>
                    <h1>God Bless America</h1>
                    <p>Fedezze fel az igazi amerikai luxust, izmot és státuszt a nagyblokkos motorok fénykorából jött Cadillac Fleetwood-dal, az USA csúcsmárkájának egyik magnum opusával.<br />
                        Klasszikus amerikai forma, erő, egy rikító, vonzó belső térrel, egy igazi relikvia egy letűnt korból.<br />
                       </p>
                </div>
                <hr className='sectionBreak' style={{width: "70%", margin: "auto", marginTop: 15, marginBottom: 15}}/>
                <h2 style={{textAlign: "center", color: "white", fontSize: 30, marginTop: 15, marginBottom: 15}}>Az összes projektünk</h2>
                
                        <p style={{textAlign: "center", color: "white", fontSize: 24, width: "60%", margin: "auto", marginBottom: 25}}>Fedezze fel a további felsőkategóriás munkáinkat lentebb!<br />A képeink egy <b>Before/After</b> csúszkával lettek ellátva, hogy szemléltessük a különbséget az alapmodell és a testreszabott modell közötti különbséget.</p>
                <div className="ImageCardContainer">
                    <SliderImage beforeSrc={m2before} afterSrc={m2after} kepcim='BMW M2 Competition' cimleiras='A felsőkategóriás német teljesítmény és a megbízhatatlan motorok találkozása' kepleiras='A német luxusmárka évtizedek óta törekszik arra, hogy a teljesítményt, hatékonyságot és a luxust tökéletes harmóniába tudja formálni minden autóban.
Az M2 Competition kérdés nélkül az egyik legkülönlegesebb platform csúcsmodellje, a sor-hatos motorok iskolapéldájával, az S55-ös ikerturbós motorral felszerelve, 410 lóerővel gurul ki a gyárból.
Ügyfelünk újult külsővel és porig ültetve, vadonatúj karbon kerekekkel tapasztlahatja a hibakód-kiüttetés és a havi olajcsere élményét a HuGyoS Original Bodyworks által testreszabott teljesítmény coupé-val.'/>
                    <SliderImage beforeSrc={mk5Before} afterSrc={mk5After} kepcim='Toyota Supra Mk. 5' cimleiras='A legikonikusabb japán autó méltó utódja.' kepleiras='Mindenki, aki látta az első Halálos Iramban filmet, azóta mélyen szerelmes a negyedik generációs Toyota Suprába.
Sajnos a 90-es éveket hátra kell hagyni a Toyotának, és egy hasonló hagyatékú autót kellett tervezni az új nemzedéknek, és itt jön képbe az ötödik generációs Supra.
Ez az autó a japán megbízhatóság és a német teljesítmény tökéletes ötvözete, mivel ezt az autót egy 3 literes I6-os BMW B58 ikerturbós motor hajtja, kifejtve 382 lóerőt.
Ügyfelünk a vadonatúj teljesítmény légterelőkön és vadonatúj kerekeken kívül egy híres japán sorozat által inspirált kozmetikai módosítást kért tőlünk, éltetve a Toyota több évtizedes hagyatékát.
'/>
                    <SliderImage beforeSrc={alpineBefore} afterSrc={alpineAfter} kepcim='Alpine A110' cimleiras='Kis motor, hatalmas erő' kepleiras='A francia autóipar koronája, a Renault sportautó-osztálya, Alpine, évtizedek óta készít művészi, pillekönnyű sportautókat. 1.1 tonnára jut 252 lóerő, amelyet egy kifejezetten hatékony 1.8 literes négyhengeres turbó motor hajt. A hengerűrtartalom meg se közelíti a konkurenciát, viszont az európai turbó hihetetlen hatékonyságának és a karosszéria könnyűsége miatt a pályán a az A110-et meg se közelítik a versenytársai. Ügyfelünk egy teljes festést kért, és egy retró stílusú inverz matricát az autó oldalára, ötvözve a modern és a régebbi francia autógyártás kozmetikai csodáit'/>
                    <SliderImage beforeSrc={gtBefore} afterSrc={gtAfter} kepcim='Ford GT' cimleiras='A Le Mans legenda utódja' kepleiras='A fél évszázad óta élő legenda, a Ford GT, a legjobb sikersztori a motorsport történelmében, amikor a Le Mans 24 órás futamon az amerikai erő második helyre kényszerítette a Ferrarit. Ötvenegy év múlva, a Ford csapata nem felejtette el ezt a sikert, és azóta törekszik arra, hogy az új modell felérhessen a régivel. Az amerikai szuperautók csúcsa, a Ford kihozta a lehető legtöbbet a 3.5 literes hathengeres motorokból, 647 lóerővel, annak érdekében, hogy a pálya legjobbjai lehessenek. Ügyfelünk a tiszta, egyszerű modifikációkra esküszik, egy szénszálas szettet és üvegsötétítést bízott ránk.'/>
                    <SliderImage beforeSrc={abarthBefore} afterSrc={abarthAfter} kepcim='Fiat Abarth 500' cimleiras='Az olasz városi autózás atyja' kepleiras='A már 1957-től gyártott modellt a mai napig, felfrissítve gyártják. Ez nem is véletlen, hiszen a korabeli modellek 500 köbcentis motorja iszonyatosan alacsony fogyasztásra volt képes, akár csak városi közlekedés közben is, emellett kevesebb, mint 3 méteres hosszúsága a parkolást is megkönnyítette. Mindez elég volt ahhoz, hogy a mai napig fennmaradó városi autó lehessen. A mindehhez társított Abarth kiadás pedig vitt egy kis tüzet az autóba, arra az esetre ha a telekre lemennénk hétvégén, élményben is többet nyújtson. Az igazi relikviát festett gumikkal, vadonatúj védőfestékkel és felújított elektronikával láttuk el, megtartva a régies kinézetet.'/>
                    <SliderImage beforeSrc={amcBefore} afterSrc={amcAfter} kepcim='AMC Javelin' cimleiras='USA! USA! USA!' kepleiras='Az "American Motors Corporation" 1968 és 1971 között gyártotta ezt a lehengerlő formavilágú, szigorú és egyedi izomautót. A 6.6 literes V8-as motor brutális nyomatéka és 300 feletti lőerőszáma valóban egy elképesztő izomautóvá tette a maga korában, emellett árban is elérhető kategória volt. A mai napig időtlen forma, ám sajnos, mint minden más amerikai dögnek, ennek is betett a 70-es évek olajválsága, így a modell feledésbe merült, majd a márka megszűnésével megpecsételődött, hogy nem is tér vissza. A formabontó design ezen a muzeális értékű autón tiszteletet parancsol az utakon a modern standardokhoz képest is kitűnő teljesítményével, és garantáltan nem fognak hinni a szemüknek az EcoBoost-os Mustangok az ACCH-n.'/>
                    <SliderImage beforeSrc={cadillacBefore} afterSrc={cadillacAfter} kepcim='Cadillac Elmiraj' cimleiras='Az egyetlen példány a világon' kepleiras='Az eddigi legmonumentálisabb projektünk, az egyedi, egyetlen példányos Cadillac Elmiraj egy koncepcióautó 2013-ból, ami sosem került gyártásra. Nincs szükség tökéletesíteni a tökéleteset, egy igazi amerikai izomautóval van dolgunk, pontosabban egy 4.5 literes ikerturbós benzinvedelő V8-al, ami 500 lóerővel üvölti a szabadságot. Ügyfelünk egy $110B értékű multicég, megbízásukra átalakítottuk egy szponzorautóvá. Sajnálatos, hogy mi történt az 1/1 koncepcióautó külsejével, de a pénz beszél, és a V8 üvölt.'/>
                    <SliderImage beforeSrc={astonBefore} afterSrc={astonAfter} kepcim='Aston Martin Valour' cimleiras='Királyi elegancia'kepleiras='Az Aston Martin Valour az egyik legexkluzívabb autó a mai piacon, az igazi retró brit versenyautók modern reinkarnációja egy 5.2 literes duplaturbós V12-es, 715 lóerős, manuális váltóval felszerelt bestia. Ebből a kocsiból mindössze száztíz példány lett legyártva, és megtisztelés volt számunkra, hogy együtt dolgozhattunk ügyfelünkkel, (nem, nem James Bond-dal), és felszerelhettük a járgányt egy vadonatúj festéssel, légterelővel és egyéb csúcskategóriás tartozékokkal. Módosításainknak köszönhetően kb. 3-4 kémtevékenységben bűntársak vagyunk.'/>
                </div>
            </div>
            <Footer FooterText="Copyright 2024 HuGyoS Original Bodyworks Ltd. Semmilyen jog nincs fenntartva, csak egy iskolai projekt, legyenek szívesek nem beperelni minket. Minden felhasznált tartalom a jogos szerzőjének tulajdona." />
        </>
    )
}
export default Gallery