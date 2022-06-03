import React from 'react';
import s from "./Message.module.css"

type MessagePropsTypes = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsTypes) {
    return (
        <div className={s.block}>
            <div className={s.message}>
                <img src={props.avatar}/>
                <div className={s.message_block}>
                    <div className={s.item}>
                        <h3>{props.name}</h3>
                        <p>{props.message}</p>
                    </div>
                    <div className={s.time}>
                        <h5>{props.time}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
