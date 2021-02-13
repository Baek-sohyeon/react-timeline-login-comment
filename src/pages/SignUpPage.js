import React, { useState } from 'react';
import * as api from '../api/server';

export function SignUpPage(props){
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    };
    const signup = async () => {
        const { history } = props;
        const token = await api.createUser(input.username,input.password);
        if(token.non_field_errors){
            token.non_field_errors.map((e) => alert(e))
        } else{
            history.push('/');
        }
    };

    return <>
        <h2>Sign Up</h2>
        <span>id: </span><input name={"username"} onChange={(e) => setInputData('username', e.target.value)}/><br/>
        <span>password: </span><input name={"password"} type={"password"} onChange={(e) => setInputData('password', e.target.value)}/>
        <button id={"join"} onClick={signup}>JOIN</button>
    </>

}
