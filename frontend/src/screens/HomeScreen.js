import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "./../data";
import Product from "./../components/Product";
import MessageBox from "./../components/MessageBox";
import LoadingBox from "./../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const productList = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const { loading, error, products } = productList;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(listProducts());
  };

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className='row center'>
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
