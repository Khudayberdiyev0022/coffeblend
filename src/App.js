import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Menu from "./Menu";
import Services from "./Services";
import Blog from "./Blog";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import ShopCard from "./ShopCard";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/shopcard'>
          <ShopCard />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
