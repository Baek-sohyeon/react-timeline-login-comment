import React from 'react';
import { Detail } from "./detail";

export function Details(props){
    return props.comments.map((comment) => <Detail key={comment.id} id={comment.id} name={comment.owner} body={comment.content} />)
}