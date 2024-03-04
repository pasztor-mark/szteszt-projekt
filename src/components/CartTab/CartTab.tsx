import { useEffect, useState } from 'react'
import './CartTab.scss'
import { FiShoppingCart } from 'react-icons/fi'
import CartListing from '../CartListing/CartListing'


interface Props {
    cartContent: []
}
interface CartItem {
    cim: string
    minAr: number
    maxAr: number
}
export function CartTab(props: Props) {
    const [sideShown, setSideShown] = useState(false)
    const [cartContent, setCartContent] = useState([] as CartItem[])
    
    useEffect(()=>{
        const szolgLista = props.cartContent as CartItem[]
        setCartContent(szolgLista)
    }, [props.cartContent])
    return (
        <>
        <div className="CartButton" id={sideShown ? "ButtonActive" : "ButtonInactive"}>
            <a onClick={() => {setSideShown(!sideShown)}}><FiShoppingCart/></a>
            <p>{props.cartContent.length}</p>
        </div>
        <div className="ShoppingCart" id={sideShown ? "SideActive" : "SideInactive"}>
            <div className="ItemContainer">
                <h1>Kosár</h1>
                <h3>A kosárhoz adott szolgáltatások itt jelennek meg.</h3>
                <hr />
                {
                    cartContent.map(item =>(<CartListing cim={item.cim} minAr={item.minAr} maxAr={item.maxAr}/>))
                }
            </div>
        </div>
        </>
    )
}
export default CartTab