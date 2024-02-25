import { } from 'react'
import { useState } from 'react'
import './sliderimage.scss'


interface Props {
    beforeSrc: string
    afterSrc: string
    kepcim: string
    cimleiras: string
    kepleiras: string
}
export function SliderImage(props: Props) {
    const[imgWidth, setWidth] = useState(0)
    return (
        <>
        <div className="CardContainer">
            <div className="ImageContainer">
                
                <img className='before' src={props.beforeSrc} alt={props.kepcim} style={{opacity: 1-imgWidth/100}}/>
                <img className='after' src={props.afterSrc} alt={props.kepcim}  style={{opacity: imgWidth/100}}/>
                <input type="range" name="slider" id="slider" max={100} min={0} defaultValue={0} onChange={(e) => {setWidth(Number(e.currentTarget.value))}} />
            </div>
            <h2>{props.kepcim}</h2>
            <h3>{props.cimleiras}</h3>
            <hr />
            <p>{props.kepleiras}</p>
        </div>
        </>
    )
}
export default SliderImage