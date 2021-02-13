import React, { useState } from 'react';

export function Detailwrite(props){
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
        console.log("내용 : ", state.content);
        props.writeFunc(props.id, state.content);
        setState({
            content: ''
        })
    }
    return <>
        <div>
            <span>작성자 : {localStorage.getItem('username')}</span>
            <textarea name="content" cols = {"30"} rols = {"10"} value={state.content} onChange={getValue}/>
            <button onClick={handleClick}>댓글 달기</button>
        </div>
    </>
}