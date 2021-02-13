import React, { useState } from 'react';
import * as api from '../api/server';

export function LoginPage(props){
    const [input, setInput] = useState({
        username: '',
        password: '',
    });
    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    }
    const login = async () => {
        const { history } = props;
        const token = await api.createToken(input.username, input.password);
        if(token.non_field_errors){
            token.non_field_errors.map((e) => alert(e))
        } else{
            console.log(token);
            localStorage.setItem('token', token.token);
            localStorage.setItem('username', input.username);
            localStorage.setItem('password', input.password);
            history.push('/timeline');
        }
    };

    return <>
        <h2>Login</h2>
        <span>id: </span><input name={"username"}onChange={(e) => setInputData('username', e.target.value)}/><br/>
        <span>password: </span><input name={"password"} type={"password"} onChange={(e) => setInputData('password', e.target.value)}/>
        <button id={"login"} onClick={login}>Login</button>
    </>
}

