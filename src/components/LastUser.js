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


    const lastUser = [users[users.length - 1]];


    return (
        <React.Fragment>
            <div className='panels'>
{/* {console.log(lastUser)} */}



                <div className='panelsTitleLastUser'>Último Usuario:
                    <ul>

                        {

                             
                            lastUser.map((item, i) => {
                                return <li><PanelLastUser {...item} key={i}/></li>
                            })
                        


                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LastUsers