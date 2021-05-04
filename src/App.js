import "./App.css"
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from './component/Layout'
import AutoCalcForm from './component/AutoCalcForm'
import RequestForm from './component/RequestForm'
import Upload from './component/Upload'
import Checkout from './component/Checkout'



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route exact path='/' component={Layout} />
      <Route path='/order' component={AutoCalcForm} />
      <Route path='/request' component={RequestForm} />
      <Route path='/cart' component={Checkout} />
      <Route path='/upload' component={Upload} />
      </Switch>

    </Router>
 
  );
}

export default App;
