import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  render() {
    const { isLong } = this.props;
    return <div className="tile" />;
  }
}

export default Tile;
