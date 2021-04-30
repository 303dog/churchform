import "./App.css"
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AutoCalcForm from './component/AutoCalcForm'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route path='/order' component={AutoCalcForm} />
      </Switch>

    </Router>
 
  );
}

export default App;
