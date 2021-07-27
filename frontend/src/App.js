import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
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
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
