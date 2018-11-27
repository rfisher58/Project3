import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuAppBar from "./components/navbar/navbar";
import Axios from "axios";


class App extends Component {


login = () => {console.log("login")
 
  Axios.get('/auth/github').then((response)=>{

    console.log(response);
  })



};



  render() {
    return (
      <div className="App">
       <div className = "MenuAppBar"><MenuAppBar /></div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <a href="/auth/github/callback">
            login
          </a>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
