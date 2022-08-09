import React, { useEffect, useState } from 'react'
import PanelLastUser from './PanelLastUser'

function LastUsers() {
   
    const [users, setUsers] = useState([])
    useEffect(() => {
        getDataUsers()

    }, [])

    const getDataUsers = async () => {
        const apiUsers = await fetch("api/users")
        const users = await apiUsers.json()
        setUsers(users.data)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        /* console.log(users.data) */

    }
    /* console.log(users[users.length - 1]) */
    const lastUser = [users[users.length]];
    
    return (
        <React.Fragment>
            <div className='panels'>
            <div className='panelsTitle'>Ultimo usuario :  </div>
                <div>
                    
                    <ul>
                        { 
                            <PanelLastUser  items = {lastUser}/>

                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LastUsers