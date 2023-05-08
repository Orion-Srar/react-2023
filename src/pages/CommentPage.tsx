import React, {FC, useEffect, useState} from 'react';

import {CommentForm, Comments} from "../components";
import {IComment} from "../interfaces";
import {commentService} from "../services";

interface  IProps {
}

const CommentPage: FC<IProps> = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(()=> {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    },[])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {
    CommentPage
}