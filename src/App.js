import "./App.css"
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Layout from './component/Layout'
import RequestForm from './component/RequestForm'

import Upload from './component/Upload'
import Payment from './component/Payment'
//import Checkout from './component/Checkout'
//import Footer from './component/Footer'
import ProductCard from  "./component/ProductCard"



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route exact path='/' component={Layout} />
      <Route path='/order' component={ProductCard} />
      <Route path='/request' component={RequestForm} />
      <Route path='/payment' component={Payment} />
      <Route path='/upload' component={Upload} />
      </Switch>
    
    </Router>
 
  );
}

export default App;
