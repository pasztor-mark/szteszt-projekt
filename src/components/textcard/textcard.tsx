import { useEffect, useState } from 'react'
import { FiShoppingCart, FiCheck } from 'react-icons/fi'
import './textcard.scss'

interface Props {
    cim: string
    leiras: string
    minAr: number
    maxAr: number
}

interface CartItem {
    cim: string,
    minAr: number,
    maxAr: number
}



export function Textcard(props:Props) {
const [isInCart, setToCart] = useState(false)
const [addedToCart, addToCart] = useState(false)
const [items, setItems] = useState([] as CartItem[])

useEffect(() =>{
    if (addedToCart) {
        setItems([...items, {cim: props.cim, minAr: props.minAr, maxAr: props.maxAr}])
        console.log(items)
        addToCart(false)
    }

}, [addedToCart])
function addToLocalStorage()  {
    if (!isInCart) {
        addToCart(true)


//        setItems(JSON.stringify([...items, newlyAdded]))    
        //localStorage.setItem("cart", JSON.stringify(items))
    }
    else {
        console.log("picsa")
    }
}
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
        <button className='addToCartBtn' id={isInCart? "incart" : "notincart"} onClick={() => {setToCart(!isInCart); addToLocalStorage()}}><span className='icon'>{isInCart? <FiCheck size={40}/> : <FiShoppingCart size={40}/>}</span></button>
    </div>
</>
)
}
export default Textcard
