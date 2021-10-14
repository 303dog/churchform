import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import ContactUs from "./component/ContactUs";
//import Request from "./reusable/Request";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import NavBar from "./component/NavBar";
import Payment from "./component/Payment";
import ProductCard from "./component/ProductCard";
import MyGallery from "./reusable/gallery";
import Promo from './reusable/promo'
import Checkout from "./component/Checkout";
import './App.css'

function App() {
  return (
    <div className='app__container'>
    <Router>
    <NavBar />
    <MyGallery />
      <Switch >     
        <Route exact path='/order' component={ProductCard}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route exact path='/request' component={ContactUs}/>
      </Switch>
    
      <Promo />
      <Layout />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
