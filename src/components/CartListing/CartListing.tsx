import { } from 'react'
import './CartListing.scss'
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi'
interface Props {
    cim: string
    minAr: number
    maxAr: number
}
export function CartListing(props: Props) {
    return (
        <>
            <div className="Container">
                <div className='headSection'>
                    <h3>{props.cim}</h3>
                    <hr />
                </div>
                <div className='prices'>
                    <FiChevronsDown/>
                    <h4>{props.minAr} Ft</h4>
                    <span></span>
                    <h4>{props.maxAr} Ft</h4>
                    <FiChevronsUp/>
                </div>
            </div>
        </>
    )
}
export default CartListing