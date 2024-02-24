import { useEffect, useState } from 'react'
import AdminPage from '../AdminPage/adminpage'
import ValidationForm from '../ValidationForm/ValidationForm'

export function AdminPagev2() {
    const [accessGranted, setAccess] = useState(false)
    useEffect(()=> {
        if (localStorage.getItem("loggedIn")?.valueOf() == "true") {
            setAccess(true)
        }
        else {
            setAccess(false)
        }
    })
    function checkCredentials() {
            if (accessGranted) {
                return <AdminPage/>
            }
            else return <ValidationForm/>
    }
    return(checkCredentials())
}
export default AdminPagev2