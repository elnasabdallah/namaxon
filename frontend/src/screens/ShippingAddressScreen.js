import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = props => {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  if (userInfo && !userInfo.name) {
    props.history.push("/signin");
  }
  useEffect(() => {
    if (userInfo && !userInfo.name) {
      props.history.push("/signin");
    }
    // eslint-disable-next-line
  }, [userInfo]);
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [fullName, setFullName] = useState(
    shippingAddress ? shippingAddress.fullName : ""
  );
  const [address, setAddress] = useState(
    shippingAddress ? shippingAddress.address : ""
  );
  const [city, setCity] = useState(shippingAddress ? shippingAddress.city : "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress ? shippingAddress.postalCode : ""
  );
  const [country, setCountry] = useState(
    shippingAddress ? shippingAddress.country : ""
  );
  const dispatch = useDispatch();

  const submithandler = e => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <form className='form' onSubmit={submithandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            name='fullName'
            id='fullName'
            placeholder='Enter full name'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            placeholder='Enter full name'
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='Enter full name'
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='postalCode'>Postal code</label>
          <input
            type='text'
            name='postalCode'
            id='postalCode'
            placeholder='Enter full name'
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            name='country'
            id='country'
            placeholder='Enter full name'
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label />
          <button className='primary' type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressScreen;
