import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { signout } from "./actions/userAction";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SingninScreen from "./screens/SingninScreen";
function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <Router>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='brand' to='/'>
              nasmaxon
            </Link>
          </div>
          <div>
            <Link to='/cart'>Cart</Link>
            {cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
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
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/signin' component={SingninScreen} />
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
