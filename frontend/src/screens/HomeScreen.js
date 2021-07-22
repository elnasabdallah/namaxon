import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "./../data";
import Product from "./../components/Product";
import MessageBox from "./../components/MessageBox";
import LoadingBox from "./../components/LoadingBox";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("api/products");
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
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
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
