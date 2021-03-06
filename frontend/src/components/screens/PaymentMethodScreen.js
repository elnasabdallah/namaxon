import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../actions/cartActions";
import CheckoutSteps from "../layouts/CheckoutSteps";

const PaymentMethodScreen = props => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Payment method</h1>
        </div>
        <div>
          <div>
            <input
              type='radio'
              name='paymentMethod'
              id='paypal'
              value='Paypal'
              required
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            />
            <label htmlFor='paypal'>Paypal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type='radio'
              name='paymentMethod'
              id='stripe'
              value='Stripe'
              required
              onChange={e => setPaymentMethod(e.target.value)}
            />
            <label htmlFor='stripe'>Stripe</label>
          </div>
        </div>
        <div>
          <button className='primary' type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodScreen;
