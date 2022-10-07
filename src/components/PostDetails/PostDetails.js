import React from 'react';
import './PostDetails.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData();
    // console.log(post)
    const { id, title, body } = post;


    const navigate = useNavigate();
    // khuboi gututtopurno (jamelar)
    const clickHandler = () => {
        navigate(`/Product/${id}`)

    }
    return (
        <div className='postDetails'>

            <h2> About post Details:  {id}</h2>
            <h2> title :  {title}</h2>
            <h2> body :  {body}</h2>
            <button onClick={clickHandler}>Find Author</button>



        </div>
    );
};

export default PostDetails;