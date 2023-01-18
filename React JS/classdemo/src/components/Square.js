import "../CSS/App.css";
import "../CSS/index.css";
import React, { Component } from "react";
import SquareData from "./SquareData";
// import Card from "./Card";
export default class Square extends Component {
  render() { 
    let { data } = this.props;
    return (
      <>
        <h1 id="data">{data}</h1>
        <SquareData Data={data}></SquareData>
        
      </>
    );
  }
}
