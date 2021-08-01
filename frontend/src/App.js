import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import PrivateRoute from "./components/routes/PrivateRoute";
import CartScreen from "./components/screens/CartScreen";
import HomeScreen from "./components/screens/HomeScreen";
import OrderHistoryScreen from "./components/screens/OrderHistoryScreen";
import OrderScreen from "./components/screens/OrderScreen";
import PaymentMethodScreen from "./components/screens/PaymentMethodScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen";
import ProductList from "./components/screens/ProductList";
import ProductScreen from "./components/screens/ProductScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ShippingAddressScreen from "./components/screens/ShippingAddressScreen";
import SingninScreen from "./components/screens/SingninScreen";
import AdminRoute from "./components/routes/AdminRoute";
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
          <AdminRoute path='/productlist' component={ProductList} />
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
