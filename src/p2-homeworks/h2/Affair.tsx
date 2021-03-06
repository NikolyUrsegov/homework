import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
    bgAffair: (p: string) => string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <div className={`${s.affairBlock} ${props.bgAffair(props.affair.priority)}`}>
                <div className={s.name}>{props.affair.name}</div>
                <div className={s.priority}>{props.affair.priority}</div>
            </div>
            <div >
                <SuperButton className={s.deleteBtn} onClick={deleteCallback}></SuperButton>
                {/*<button className={s.deleteBtn} onClick={deleteCallback}></button>*/}
            </div>
        </div>
    )
}

export default Affair
