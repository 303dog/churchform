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
    <Router>
      <NavBar />
      <MyGallery />
      <Link to='/order' className='nav__form'>
        Quote Calculator{" "}
      </Link>
      <Link to='/request' className='nav__form'>
        Got A Question?
      </Link>
      <Link to='/contact' className='nav__form'>
        Contact Us
      </Link>
      <Layout />
      <ProductCard />
      <ContactUs />
      
      
      <Footer />
    
    </Router>
  );
}

export default App;
