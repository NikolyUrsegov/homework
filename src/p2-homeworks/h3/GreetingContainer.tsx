import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let eventValue = e.currentTarget.value
        setError('')
        if (eventValue.match(/^[A-Za-z]+$/)) {
            setName(eventValue)
        } else if (eventValue === '') {
            setName(eventValue)
            setError('Enter your name')
        }
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setError('')
            setName('')
        } else {
            setError('Enter your name')
        }

    }
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addUser()
    }

    const totalUsers = users.length// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDown={onKeyDown}
        />
    )
}

export default GreetingContainer
