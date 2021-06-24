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
      <Switch>
        
        <Route path='/order' component={ProductCard} />
        <Route path='/request' component={ContactUs} />
        <Route path='/payment' component={Payment} />
        <Route
          exact
          path='/pay'
          component={() => (
            <Redirect
              to={{
                pathname:
                  "https://www.alliedprintdesign.com/payment-information/",
              }}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
