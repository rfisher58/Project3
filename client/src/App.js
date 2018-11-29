import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./components/pages/home/home";

const App = () => (
  <Router> 
    <div>
      <Switch>
        <Route exact path = "/" component={Home}/>
      </Switch>
    </div>
  </Router>
)

export default App;



