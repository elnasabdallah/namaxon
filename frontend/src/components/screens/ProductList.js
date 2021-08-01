import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingBox from "../layouts/LoadingBox";
import MessageBox from "../layouts/MessageBox";
import { listProducts } from "../../actions/productActions";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
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
        <div>
          <h1>Products in stock</h1>
          <table className='table product-list'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>image</th>
                <th>Last update date</th>
                <th>Amount in Stock</th>
                <th>Cost price</th>
                <th>Sell price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{product.name}</td>
                  <td className='row center'>
                    <img
                      style={{ height: "10rem", width: "9rem" }}
                      src={product.image}
                      alt=''
                    />
                  </td>
                  <td>{product.updatedAt.substring(0, 10)}</td>
                  <td>{product.countInStock}</td>
                  <td>{product.costPrice}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className='primary'>
                      <i class='fa fa-edit'></i>
                    </button>
                    <button className='danger'>
                      <i class='fa fa-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductList;
