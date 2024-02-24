import { useState } from 'react'
import { FiShoppingCart, FiCheck } from 'react-icons/fi'
import './textcard.scss'

interface Props {
    cim: string
    leiras: string
    minAr: number
    maxAr: number
}



export function Textcard(props:Props) {
const [isInCart, setToCart] = useState(false)
return (
    <>
    <div className="TextCardContainer">
        <h1>{props.cim}</h1>
        <img src="priceLine.png" alt="Elválasztó" />
        <div className="prices">
            <h3>{props.minAr} Ft</h3>
            <h3>{props.maxAr} Ft</h3>
        </div>
        <p>{props.leiras}</p>
        <button className='addToCartBtn' id={isInCart? "incart" : "notincart"} onClick={() => setToCart(!isInCart)}><span className='icon'>{isInCart? <FiCheck size={40}/> : <FiShoppingCart size={40}/>}</span></button>
    </div>
</>
)
}
export default Textcard
