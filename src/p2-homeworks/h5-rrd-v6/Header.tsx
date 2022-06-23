import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './HW5.module.css'


function Header() {
    const [headerBar, setHeaderBar] = useState<boolean>(false)

    const showHeader = () => {
        setHeaderBar(!headerBar)
    }
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'green'
    };
    let activeStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'red'
    }

    let finishClass = headerBar ? `${s.container} ${s.active}` : s.container
    return (
        <>
            <div className={finishClass}>
                {headerBar ? <div>
                    <NavLink to={PATH.PRE_JUNIOR} style={(params) => {
                        return params.isActive ? activeStyle : linkStyle
                    }}>PRE_JUNIOR</NavLink>
                    <NavLink to={PATH.JUNIOR} style={(params) => {
                        return params.isActive ? activeStyle : linkStyle
                    }}>JUNIOR</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} style={(params) => {
                        return params.isActive ? activeStyle : linkStyle
                    }}>JUNIOR_PLUS</NavLink>
                </div> : undefined}
            </div>
            <div onClick={showHeader}>Open/Close</div>
        </>
    )
}

export default Header
