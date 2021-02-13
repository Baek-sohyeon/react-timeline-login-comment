import React, { useState } from 'react';

export function Detail(props){
    const [state, setState] = useState({
        content: props.body,
    });
    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    return <>
            <div>작성자 : {props.name}</div>
            <div>내용 : {props.body}</div>
        <hr/>

    </>
}