import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./component/Layout";
import NavBar from "./component/NavBar";
import Payment from "./component/Payment";
import Footer from './component/Footer';
import ProductCard from "./component/ProductCard";
import RequestForm from "./component/RequestForm";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Layout} />
        <Route path='/order' component={ProductCard} />
        <Route path='/request' component={RequestForm} />
        <Route path='/payment' component={Payment} />
        <Route exact path="/pay" component={() => <Redirect to={{ pathname: "https://www.alliedprintdesign.com/payment-information/" }} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
