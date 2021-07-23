import { BrowserRouter as Router, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <Router>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              nasmaxon
            </a>
          </div>
          <div>
            <a href='/cart'>Cart</a>
            <a href='/signin'>Signin</a>
          </div>
        </header>
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
