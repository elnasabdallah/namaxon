import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SingninScreen from "./screens/SingninScreen";
function App() {
  return (
    <Router>
      <div className='grid-container'>
        <Header />
        {/* <CheckoutSteps /> */}
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/signin' component={SingninScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/shipping' component={ShippingAddressScreen} />
          <Route path='/payment' component={PaymentMethodScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/orderhistory' component={OrderHistoryScreen} />
          <PrivateRoute path='/profile' component={ProfileScreen} />
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
