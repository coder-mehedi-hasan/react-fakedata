import React from 'react';
import ProductDetails from '../productDetails/ProductDetails';

const Product = ({product}) => {
    const clikProduct = (product)=>{
    <ProductDetails product={product}></ProductDetails>
    }
    return (
        <div className='item'>
            <div className="img">
                <img src={product.image} alt="" />
            </div>
            <div className="details">
                <h3>Product : {product.product} <span>{product.cetagory}</span></h3>
                <p>Brand : {product.brand}</p>
                <p>Model : {product.model}</p>
                <p>Color : {product.color}</p>
                <p>Price : <span>{product.price} $</span> </p>
                <button onClick={()=> clikProduct(product)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;