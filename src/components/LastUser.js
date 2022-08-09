import React, { useEffect, useState } from 'react'
import Categories from './Categories'

import UsersIndex from './UsersIndex'

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

    return (
        <React.Fragment>
            <div className='panels'>
            <div className='panelsTitle'>Ultimo usuario : {users.lastIndexOf(users.length -1)}</div>
                <div>
                    
                    <ul>
                        {/* {
                            users.map((item, i) => {
                                return <li><Categories {...item} key={i}/></li>
                            })
                        } */}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LastUsers