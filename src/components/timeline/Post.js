import React, { useState, useEffect } from 'react';
import * as api from '../../api/server';


export function Post(props){
    const [post, setPost] = useState({
        name: '',
        content: '',
    });

    const getInfo = async () => {
        api.readPost(props.id).then(function (data){
            localStorage.setItem("id", data.id);
            setPost({
                name: data.username,
                content: data.content,
            });
        });
    };
    useEffect(() => {
        getInfo();
    }, []);



    const getValue = e => {
        const {name, value} = e.target;
        setPost({
            ...post,
            [name]: value,
        });
    };


    return <>
            <div>작성자 : {post.name}</div>
            <div>내용 : {post.content}</div>
        <hr/>
        <hr/>
    </>
}