import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const Post = () => {
    let {postId} = useParams();

    let [post, setPosts] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPosts(value));
    },[postId])

    return (
        <div>

            {
                post && (
                    <div>
                        <div>id:{post.id}</div>
                        <div>title:{post.title}</div>
                        <div>body:{post.body}</div>
                    </div>
                )
            }
            
        </div>
    );
};

export default Post;