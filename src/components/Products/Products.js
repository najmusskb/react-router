import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pro from '../Pro/Pro';




const Products = () => {
    const products = useLoaderData();
    // console.log(products)

    return (
        <div>

            <h1>This is products{products.length}</h1>
            {
                products.map(product => <Pro key={product.id} product={product}></Pro>)
            }

        </div>
    );
};

export default Products;