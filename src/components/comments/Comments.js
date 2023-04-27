import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/comment.service";
import Comment from "../comment/Comment";

const Comments = () => {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    },[])
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
            
        </div>
    );
};

export default Comments;