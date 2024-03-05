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
    const [minArSum, setMinArSum] = useState(0)
    const [maxArSum, setMaxArSum] = useState(0)

    useEffect(() => {
        setMinArSum(0)
        setMaxArSum(0)
        const szolgLista = props.cartContent as CartItem[]
        setCartContent(szolgLista)
        szolgLista.forEach(ar => {
            setMinArSum(minArSum + parseInt(`${ar.minAr}`))
            setMaxArSum(maxArSum + parseInt(`${ar.maxAr}`))
        });
    }, [props.cartContent])
    return (
        <>
            <div className="CartButton" id={sideShown ? "ButtonActive" : "ButtonInactive"}>
                <a onClick={() => { setSideShown(!sideShown) }}><FiShoppingCart /></a>
                <p>{props.cartContent.length}</p>
            </div>
            <div className="ShoppingCart" id={sideShown ? "SideActive" : "SideInactive"}>

                <div className="ItemContainer">
                    <h1>Kosár</h1>
                    <h3>A kosárhoz adott szolgáltatások itt jelennek meg.</h3>
                    <div className="CartTotal">
                        <h3>{minArSum} Ft - {maxArSum} Ft</h3>
                    </div>
                    {
                        cartContent.map(item => (<CartListing cim={item.cim} minAr={item.minAr} maxAr={item.maxAr} />))
                    }

                </div>
            </div>
        </>
    )
}
export default CartTab