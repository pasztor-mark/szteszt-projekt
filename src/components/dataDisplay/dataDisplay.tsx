import { } from 'react'
import './dataDisplay.css'
interface Props {
    data1: any
    data2: any
    data3: any
    data4: any
    idData: number
}

export function DataDisplay(props: Props) {
    return (
        <>
        <div className='row'>
            <div className="data"><p>{props.data1}</p></div>
            <div className="data"><p>{props.data2}</p></div>
            <div className="data"><p>{props.data3}</p></div>
            <div className="data"><p>{props.data4}</p></div>
            <div className="data"><p style={{textAlign: "center", fontSize: 32}}>{props.idData}</p></div>
        </div>
        </>
    )
}

export default DataDisplay