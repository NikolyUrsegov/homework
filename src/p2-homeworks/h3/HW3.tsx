import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let user = {_id: v1(), name: name}
        let newUsers = [user, ...users]
        setUsers(newUsers) // need to fix
    }

    return (
        <div>
            <hr/>
            <div className={s.container}>
                homeworks 3

                {/*should work (должно работать)*/}
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>


                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeGreeting/>*/}
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW3
