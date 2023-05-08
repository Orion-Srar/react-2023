import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IComment} from "../../interfaces";
import {commentService} from "../../services";
import {IUseState} from "../../types/useState.type";

interface IProps {
    setComments: IUseState<IComment[]>
}

const CommentForm: FC<IProps> = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm<IComment>();

    const saveComment:SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(prev => [...prev, data])
        reset();

    }

    return (
        <form onSubmit={handleSubmit(saveComment)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};


export {
    CommentForm
}





