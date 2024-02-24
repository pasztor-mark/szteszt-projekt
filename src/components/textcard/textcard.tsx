import {} from 'react'
import './textcard.scss'

export function Textcard(props) {
return (
    <>
    <div className="CardContainer">
        <h1>{props.cim}</h1>
        <hr className='hHr'/>
        <h3>{props.cimleiras}</h3>
        <hr className='pHr'/>
        <p>{props.teljesleiras}</p>
    </div>
</>
)
}
export default Textcard
