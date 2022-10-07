import React from 'react';
import { Link } from 'react-router-dom';
import './Pro.css'

const Pro = ({ product }) => {
    console.log(product)
    const { id, name, email, username } = product;
    return (
        <div className='Product'>

            <p>Name:{name}</p>
            <p>Email:{email}</p>

            {/* daynamic vabe link kivabe banabo and route korbo */}
            <p>UserName:<Link to={`/Product/${id}`}>{username}</Link></p>

        </div>
    );
};

export default Pro;