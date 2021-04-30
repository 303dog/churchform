import "./App.css"
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AutoCalcForm from './component/AutoCalcForm'
import RequestForm from './component/RequestForm'
import UploadFile from './component/UploadFile'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route path='/order' component={AutoCalcForm} />
      <Route path='/request' component={RequestForm} />
      <Route path='/upload' component={UploadFile} />
      </Switch>

    </Router>
 
  );
}

export default App;
