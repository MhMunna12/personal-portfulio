import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Menubar from './component/Home/Menubar/Menubar';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import AllProjects from './component/AllProjects/AllProjects'
import Contact from './component/Home/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
      <Menubar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route  path="/about">
            <About/>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
          <Route path='/project'>
            <AllProjects/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
