import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { signin } from "./../actions/userAction";

const SingninScreen = props => {
  const dispatch = useDispatch();

  const submitHanler = e => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  useEffect(() => {
    if (userInfo && userInfo.name) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form a className='form' onSubmit={submitHanler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email'
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Signin
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer ? {"  "}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingninScreen;
