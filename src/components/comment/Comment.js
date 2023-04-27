import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    let navigate = useNavigate();
    let {id, name, email, body, postId} = comment;

    return (
        <div>
            <div>{id}. {name}</div>
            <div>email.{email}</div>
            <div>body.{body}</div>
            <button onClick={()=> navigate(`${postId}`)}>Get Current Post</button>
            <br/>
        </div>
    );
};

export default Comment;