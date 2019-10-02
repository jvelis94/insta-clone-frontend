import React from 'react';

function Message(props) {
    return(
        <ul id='message'>
            <section>
                <li>
                    <img src={`${props.avatar}`} /> 
                </li>
            </section>
            <section>
                <li id='username'>{props.user}</li>
                <li id='message-text'>{props.message}</li>
            </section>
        </ul>
    )
}

export default Message;