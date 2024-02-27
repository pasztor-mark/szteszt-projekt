import { } from 'react'
import './TimelineElement.scss'
import TimeLine from './TimeLineMask.png'

interface Props {
    icon: any
    cim: string
    leiras: string
}

export function TimelineElement(props: Props) {
    return (
        <>
            <div className='ElementContainer'>
                <span className='imageCont'>
                <img src={TimeLine} alt="" />
                </span>
                <span className='IconContainer'>
                    {props.icon}
                </span>
                <h3>{props.cim}</h3>
                <hr />
                <p>{props.leiras}</p>
            </div>
        </>
    )
}
export default TimelineElement