import React, { Component } from "react";
import "./TileContainer.css";

import Tile from "./Tile";

// Tile Layouts
// 4 Tile | 3 Tile | 2 Tile

// Types of Tiles
// Full Banner | Label with Icon

class TileContainer extends Component {
  render() {
    return (
      <div className="tileContainer">
        <div className="tileContainer_item titleContainer_item__fourItems">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="tileContainer_item titleContainer_item__twoItems">
          <Tile />
          <Tile />
        </div>
        <div className="tileContainer_item" />
        <div className="tileContainer_item" />
        <div className="tileContainer_item" />
        <div className="tileContainer_item" />
      </div>
    );
  }
}

export default TileContainer;
