import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePosts.css'
const SinglePost = ({ post }) => {
    const { id, title, body, userId } = post;

    const Navigate = useNavigate();

    const HandleNavigation = () => {

        Navigate(`/Product/${id}`)
    }
    return (
        <div className='post-decorartion'>

            <h1>{title}</h1>
            <p>{userId}</p>
            <p>{body}</p>
            {/* ekhon kivabe amra route korbo seita Dekhabo */}
            <Link to={`/post/${id}`}><button>See Details</button></Link>

            {/* onno vabeo kora jay click handler */}

            <button onClick={HandleNavigation}>Anouther</button>
        </div>
    );
};

export default SinglePost;