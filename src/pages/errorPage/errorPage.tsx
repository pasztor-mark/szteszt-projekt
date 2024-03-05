import './errorPage.scss'
import {Link} from 'react-router-dom'

export function ErrorPage() {
    return (
        <>
        <div className="ErrorCont">
            <img src="logo.png" alt="" />
            <h1>Úgy tűnik, az oldal, amit keres, nem létezik.</h1>
            <a><Link to="/">Vissza a kezdőlapra</Link></a>
        </div>
        </>
    )
}