import React, { useState, useEffect } from 'react';
import * as api from '../api/server';

export function MyPage(props){
    const [inputs, setInputs] = useState({
        username:'', password: ''
    });

    const getUserInfo = async () => {
        api.readMyInfo().then(function (data){
            setInputs({
                username: data.username,
                password: localStorage.getItem('password'),
            })
        });
    };
    useEffect(() =>{
        getUserInfo();
    }, []);

    const getValue = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };


    return <>
        <h2>MyPage</h2>
        <div>
            <span>id: </span><input name={"id"} type={"text"} value={inputs.id} onChange={getValue}/><br/>
            <span>password: </span><input name={"password"} type={"text"} value={inputs.password} onChange={getValue}/>
        </div>
    </>
}
