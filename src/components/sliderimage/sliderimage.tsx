import { } from 'react'
import { useState } from 'react'
import './sliderimage.css'

export function SliderImage(props) {
    const[imgWidth, setWidth] = useState(0)
    return (
        <>
        <div className="CardContainer">
            <div className="ImageContainer">
                <input type="range" name="slider" id="slider" max={100} min={0} defaultValue={0} onChange={(e) => {setWidth(Number(e.currentTarget.value))}} />
                <img className='before' src={props.beforeSrc} alt={props.kepcim} style={{opacity: imgWidth/100}}/>
                <img className='after' src={props.afterSrc} alt={props.kepcim}  style={{opacity: 1-imgWidth/100}}/>
            </div>
            <h2>{props.kepcim}</h2>
            <hr />
            <p>{props.kepleiras}</p>
        </div>
        </>
    )
}
export default SliderImage