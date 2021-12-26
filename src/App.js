import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from "./containers/header";
import ProductList from "./containers/productList";
import ProductDetails from "./containers/productDetails";
import Cart from './containers/cart';

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
