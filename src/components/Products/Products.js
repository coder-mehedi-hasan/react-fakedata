import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const products = useLoaderData()
    return (
        <div id='products'>
            <div className="container">
                <div className="title">
                <h3>All Products</h3>
                </div>
                <div className="main">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;