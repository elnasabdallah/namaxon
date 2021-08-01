import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userAction";
import { clearCart } from "../../actions/cartActions";
import SideBar from "./SideBar";
import { useState } from "react";

const Header = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
    dispatch(clearCart());
  };

  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    if (sideBar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  };
  return (
    <>
      <header className='row'>
        <div>
          <button className='open-side-bars' onClick={toggleSidebar}>
            <i className='fa fa-bars'></i>
          </button>
          <Link className='brand' to='/'>
            namaxon
          </Link>
        </div>
        <div>
          <div className='search'>
            <input type='text' name='search' id='search' />
            <button>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
        <div>
          <Link to='/cart'>Cart</Link>
          {cartItems && cartItems.length > 0 ? (
            <span className='badge'>{cartItems.length}</span>
          ) : (
            ""
          )}
          {userInfo && userInfo.name ? (
            <div className='dropdown'>
              <Link to='#'>
                {userInfo.name} <i className='fa fa-caret-down'></i>
              </Link>
              <ul className='dropdown-content'>
                <li>
                  <Link to='/profile'>User Profile</Link>
                </li>
                <li>
                  <Link to='/orderhistory'>Order History</Link>
                </li>
                <li>
                  <Link to='#signout' onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to='/signin'>Signin</Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className='dropdown'>
              <Link to='#admin'>
                Admin <i className='fa fa-caret-down'></i>
              </Link>
              <ul className='dropdown-content'>
                <li>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                  <Link to='/productlist'>Prducts</Link>
                </li>
                <li>
                  <Link to='/orderlist'>Orders</Link>
                </li>
                <li>
                  <Link to='/userlist'>Users</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <SideBar setSideBar={toggleSidebar} sideBar={sideBar} />
    </>
  );
};

export default Header;
