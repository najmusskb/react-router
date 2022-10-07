import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {

    const Product = useLoaderData();
    console.log(Product);

    return (
        <div>
            <h1>Friend Details About{Product.name}</h1>
            <h2> Phone:{Product.phone}</h2>
        </div>
    );
};

export default ProductDetails;