import React, { useEffect, useState } from 'react'
import Users from './Users'


function AllProducts() {
   
    const [users, setUsers] = useState([])
    useEffect(() => {
        getDataUsers()

    }, [])

    const getDataUsers = async () => {
        const apiUsers = await fetch("api/users")
        const users = await apiUsers.json()
        setUsers(users.data)//ACA LLAMAMOS A DATA SI ES QUE QUEREMOS INGRESAR A LA DATA !IMPORTANTE¡, en este caso queremos ingresar al total
        console.log(users)
 
    }

    return (
        <React.Fragment>
            
           
                <div className='panelsProducts'>
                    
                    <ul>
                        {
                            users.map((item, i) => {
                                return <li><Users {...item} key={i}/></li>
                            })
                        }
                    </ul>
                </div>   
        </React.Fragment>
    )
}

export default AllProducts
    
    
    
