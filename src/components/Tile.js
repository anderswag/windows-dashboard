//@flow

import React, { Component } from "react";
import "./Tile.css";

const colors = {
  "blue-light": "#2e8def",
  "blue-dark": "#2672ec",

  "teal-light": "#00a0b1",
  "teal-dark": "#008299",

  "purple-light": "#A700AE",
  "purple-dark": "#8C0095",

  "red-light": "#BF1E4B",
  "red-dark": "#AC193D",

  "orange-light": "#DC572E",
  "orange-dark": "#D24726",

  "green-light": "#00A600",
  "green-dark": "#008A00",

  "sky-blue-light": "#0A5BC4",
  "sky-blue-dark": "#094AB2"
};

type Proptypes = {
  color: "blue-light" | "blue-dark" | "teal-light" | "teal-dark"
};

class Tile extends Component<Proptypes> {
  render() {
    return <div style={this.getColorStyle()} className="tile" />;
  }

  getColorStyle() {
    const { color } = this.props;
    return {
      backgroundColor: colors[color]
    };
    // return { backgroundColor: colors[color] };
  }
}

export default Tile;
