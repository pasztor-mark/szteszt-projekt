import { } from 'react'
import './ContactCard.scss'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

interface Props {
    icon: any
    nev: string
    email: string
    tel: string
    cim: string
}

export function ContactCard(props: Props) {

    return (
        <>
            <div className="Card">
                <div className='Icon'>{props.icon}</div>
                <h2>{props.nev}</h2>
                <hr />
                <div className="InfoContainer">
                    <div>
                        <span><FiMail /></span>
                        <p>{props.email}</p>
                    </div>
                    <div>
                        <span><FiPhone /></span>
                        <p>{props.tel}</p>
                    </div>
                    <div>
                        <span><FiMapPin /></span>
                        <p>{props.cim}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactCard