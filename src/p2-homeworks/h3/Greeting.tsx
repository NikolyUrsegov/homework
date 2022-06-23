import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDown} // деструктуризация пропсов
) => {
    const inputClass = !error ? s.inputNorm : s.inputError // need to fix with (?:)

    return (
        <div className={s.d2}>
            <div>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    className={`${s.input} ${inputClass}`}
                    onKeyDown={onKeyDown}/>
                {/*<input value={name}*/}
                {/*       onChange={setNameCallback}*/}
                {/*       className={`${s.input} ${inputClass}`}*/}
                {/*       onKeyDown={onKeyDown}/>*/}
                {/*<button onClick={addUser}>add</button>*/}
                <SuperButton onClick={addUser}>Add</SuperButton>
            </div>
            <div className={s.errorSpan}>
                <span>{error}</span>
            </div>
            <div className={s.totalUsers}>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
