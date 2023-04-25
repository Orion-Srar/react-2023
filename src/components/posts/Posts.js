import React, {useEffect, useState} from 'react';
import {postsService} from "../../axios.service/posts.service/posrs.service";
import Post from "../post/Post";

const Posts = ({user}) => {

    let [posts, setPosts] = useState(null);

    useEffect(()=>{
      postsService.getAll(user.id).then(value => value.data).then(posts=> setPosts(posts))
    },[user.id])

    return (
        <div>
            {
              posts &&  posts.map((post,index) => <Post post={post} key={index}/>)
            }
        </div>
    );
};

export default Posts;