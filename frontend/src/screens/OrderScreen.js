import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsOrder } from "../actions/orderActions";
import axios from "axios";

const OrderScreen = props => {
  const orderId = props.match.params.id;
  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const addPaypalScript = async () => {
      //create script element for paypal and add as the last child of the html body tag
      const { data } = await axios.get("/api/config/paypal"); //get the paypal client ID
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script); //append the script
    };

    if (!order._id) {
      //if order detail is no loaded into state load it
      dispatch(detailsOrder(orderId));
    } else {
      //if is loaded and is not  paid
      if (!order.isPaid) {
        if (!window.paypal) {
          //if paypal script tag is not appended to the page
          addPaypalScript(); //append it
        } else {
          setSdkReady(true); //if the script is added , setsdk to true
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady]);

  const successPaymentHandler = () => {
    //to do dispatch pay order
  };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant='danger'>{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id} </h1>
      <div className='row top'>
        <div className='col-2'>
          <ul>
            <li>
              <div className='card card-body'>
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong> {order.shippingAddress.fullName}{" "}
                  <br />
                  <strong>Address: </strong>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant='success'>
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Not delivered </MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Payment</h2>
                <p>
                  <strong>Mehtod:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant='success'>
                    Paid at {order.isPaidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Not Paid </MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map(item => (
                    <li key={item.product}>
                      <div className='row'>
                        <div>
                          <img
                            className='small'
                            src={item.image}
                            alt={item.name}
                          />
                        </div>

                        <div>
                          <div className='min-30'>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>
                        </div>
                        <div></div>
                        <div>
                          {item.qty} x ${item.price}=${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className='row'>
                  <div>Items</div>
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>
                    <strong>Order Total</strong>{" "}
                  </div>
                  <div>
                    <strong> ${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
