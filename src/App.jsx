import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Pay from './components/Pay'
import Test from './components/Test'
import Success from './pages/Success'

const App = () => {
  const user = false

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* : ni parameter */}
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        {/* <Route exact path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route> */}
      </Switch>
    </Router>
  )
}

export default App