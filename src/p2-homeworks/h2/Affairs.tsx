import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

const bgAffair = (priority: string) => {
    switch (priority) {
        case "high":
            return s.high
            break
        case "middle":
            return s.middle
            break
        case "low":
            return s.low
            break
        default:
            return ''

    }
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            bgAffair = {bgAffair}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }


    return (
        <div className={s.container}>
            {mappedAffairs}
            {/*<div className={s.buttonBlock}>*/}
            {/*    <button className={`${bgAffair("all")} ${s.priorityBtn}`} onClick={setAll}>All</button>*/}
            {/*    <button className={`${bgAffair("high")} ${s.priorityBtn}`} onClick={setHigh}>High</button>*/}
            {/*    <button className={`${bgAffair("middle")} ${s.priorityBtn}`} onClick={setMiddle}>Middle</button>*/}
            {/*    <button className={`${bgAffair("low")} ${s.priorityBtn}`} onClick={setLow}>Low</button>*/}
            {/*</div>*/}
            <div className={s.buttonBlock}>
                <SuperButton className={`${bgAffair("all")} ${s.priorityBtn}`} onClick={setAll}>All</SuperButton>
                <SuperButton className={`${bgAffair("high")} ${s.priorityBtn}`} onClick={setHigh}>High</SuperButton>
                <SuperButton className={`${bgAffair("middle")} ${s.priorityBtn}`} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={`${bgAffair("low")} ${s.priorityBtn}`} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
