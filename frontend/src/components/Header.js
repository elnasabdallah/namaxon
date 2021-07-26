import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./../actions/userAction";
import { clearCart } from "./../actions/cartActions";

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

  return (
    <header className='row'>
      <div>
        <Link className='brand' to='/'>
          namaxon
        </Link>
      </div>
      <div>
        <Link to='/cart'>Cart</Link>
        {cartItems && cartItems.length > 0 ? (
          <span className='badge'>{cartItems.length}</span>
        ) : (
          ""
        )}
        {userInfo ? (
          <div className='dropdown'>
            <Link to='#'>
              {userInfo.name} <i className='fa fa-caret-down'></i>
            </Link>
            <ul className='dropdown-content'>
              <Link to='#signout' onClick={signoutHandler}>
                Sign Out
              </Link>
            </ul>
          </div>
        ) : (
          <Link to='/signin'>Signin</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
