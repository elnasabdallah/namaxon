import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../layouts/LoadingBox";
import MessageBox from "../layouts/MessageBox";
import { register } from "../../actions/userAction";

const RegisterScreen = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector(state => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const submitHanler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form a className='form' onSubmit={submitHanler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='name'
            name='name'
            id='name'
            placeholder='Enter Name'
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
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
          <label htmlFor='confirmPassword'>Confirm password</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Enter Confirm Password'
            required
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account ?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Sign-in</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
