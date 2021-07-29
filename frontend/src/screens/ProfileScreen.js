import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const ProfileScreen = () => {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);

  const submitHandler = e => {
    e.preventDefault();
    //dispatch here
  };
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter name'
                value={user.name}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter email'
                value={user.email}
              />
            </div>
            <div>
              <label htmlFor='pasword'>Password</label>
              <input
                type='password'
                name='password'
                id='passwrod'
                placeholder='Enter password'
              />
            </div>
            <div>
              <label htmlFor='confirmPasword'>Confirm Password</label>
              <input
                type='confirmPasword'
                name='confirmPasword'
                id='passwrod'
                placeholder='Enter Confirm Pasword'
              />
            </div>
            <div>
              <label />
              <button className='primary' type='submit'>
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfileScreen;
