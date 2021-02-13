import React, { useState, useEffect } from 'react';
import * as api from "../api/server";
import { Post } from "../components/timeline/Post";
import { Details } from "../components/comment/details";
import { Detailwrite } from "../components/comment/detailwrite";

export function PostPage({match}){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const server = async () => {
            setComments(await api.readComments(match.params.id));
        }
        server();
    }, []);

    return <>
        <Post id={match.params.id}/>
        <div>
            <Details
                readFeeds = {api.readComments}
                setFeeds = {setComments}
                id={match.params.id}
                comments = {comments}
            />
            <Detailwrite
                id = {match.params.id}
                writeFunc = {api.createComment}
            />
        </div>
    </>;
}