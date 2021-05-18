import "./App.css"
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Layout from './component/Layout'
import RequestForm from './component/RequestForm'
import Upload from './component/Upload'
import Payment from './component/Payment'
import Checkout from './component/Checkout'
//import Footer from './component/Footer'
import Products from "./component/Products"



function App() {
  return (
    <Router>
      <img src='https://www.alliedprintdesign.com/wp-content/uploads/2015/03/logo-allied-print-design.png' />
      <NavBar />
      <Switch>
      <Route exact path='/' component={Layout} />
      <Route path='/order' component={Products} />
      <Route path='/request' component={RequestForm} />
      <Route path='/payment' component={Payment} />
      <Route path='/upload' component={Upload} />
      <Route path='/checkout' component={Checkout} />
      </Switch>
    
    </Router>
 
  );
}

export default App;
