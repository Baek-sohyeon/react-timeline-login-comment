import React, { useState } from 'react';

export function PostWrite(props){
    const [state, setState] = useState({
        content: '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleClick = () => {
        props.writeFunc(state.content);
        setState({
            content: ''
        })
    }
    return <>
        <div>
            <span>작성자 : {localStorage.getItem('username')}</span>
            <textarea name="content" cols = {"30"} rols = {"10"} value={state.content} onChange={getValue}/>
            <button onClick={handleClick}>전송</button>
        </div>
    </>

}