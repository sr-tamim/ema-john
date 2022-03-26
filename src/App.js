
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AddOrEditProduct from './components/AddOrEditProduct/AddOrEditProduct';
import Login from './components/Authentication/Login/Login';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import Profile from './components/Authentication/Profile/Profile';
import SignUp from './components/Authentication/SignUp/SignUp';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import ProductsContextProvider from './contexts/ProductsContext';
import UserContextProvider from './contexts/UserContext';

function App() {

  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <div className="container">
          <Router>
            <Header></Header>
            <main>
              <Cart />
              <Switch>
                <Route exact path="/">
                  <Products />
                </Route>
                <Route path="/shop">
                  <Products />
                </Route>
                <Route exact path="/product/:id">
                  <ProductDetails />
                </Route>
                <PrivateRoute exact path="/inventory">
                  <Inventory />
                </PrivateRoute>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/profile">
                  <Profile />
                </PrivateRoute>
                <Route path="/product/update/:id">
                  <AddOrEditProduct method="Edit" />
                </Route>
              </Switch>
            </main>
          </Router>
        </div>
      </ProductsContextProvider>
    </UserContextProvider>
  );
}

export default App;

export function Loading() {
  return (
    <div className='loading-container'>
      Loading...
    </div>
  )
}