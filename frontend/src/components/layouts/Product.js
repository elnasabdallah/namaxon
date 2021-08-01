import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div key={product._id} className='card'>
      <Link to={`product/${product._id}`}>
        <img className='medium' src={product.image} alt='product' />
      </Link>
      <div className='card-body'>
        <a href={`product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className='price'>${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
