import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
