import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import Apply from "./Applications/Applications";

const App = () => {
 

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path = '/' exact component={Home}/>
          <Route path = '/apply' exact component={Apply}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
