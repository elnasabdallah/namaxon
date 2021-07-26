import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SingninScreen from "./screens/SingninScreen";
function App() {
  return (
    <Router>
      <div className='grid-container'>
        <Header />
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/signin' component={SingninScreen} />
          <Route path='/register' component={RegisterScreen} />
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
