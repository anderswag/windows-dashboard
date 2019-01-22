import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TileContainer from "./components/TileContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TileContainer />
      </div>
    );
  }
}

export default App;
