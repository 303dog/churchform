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
      <Layout />
      <ProductCard />
      <ContactUs />
      
      
      <Footer />
    
    </Router>
  );
}

export default App;
