import React, { useEffect, useState } from 'react'

import UsersIndex from './UsersIndex'

function Users() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        getDataUsers()

    }, [])

    const getDataUsers = async () => {
        const apiUsers = await fetch("api/users")
        const users = await apiUsers.json()
        setUsers(users.total)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        console.log(users.total)

    }

    return (
        <React.Fragment>
            <div className='panels'>
            <div className='panelsTitle'>Usuarios : {users}</div>
                <div>
                    
                    {/* <ul>
                        {
                            users.map((item, i) => {
                                return <li><UsersIndex {...item} key={i} /></li>
                            })
                        }
                    </ul> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Users