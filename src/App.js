import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import NavBar from "./component/NavBar";
import Payment from "./component/Payment";
import ProductCard from "./component/ProductCard";
import MyGallery from "./reusable/gallery";
import Promo from './reusable/promo'
import './App.css'

function App() {
  return (
    <div className='app__container'>
    <Router>
    <NavBar />
      <Switch >     
        <Route exact path='/' component={MyGallery}/> 
        <Route exact path='/order' component={ProductCard}/>
        <Route exact path='/request' component={ContactUs}/>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
