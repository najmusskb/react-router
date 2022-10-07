import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {

    const posts = useLoaderData();
    // console.log(posts);
    // hook

    return (
        <div>


            <h3>This is Post Side</h3>

            {
                posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
            }

        </div>
    );
};

export default Post;