import '../CSS/index.css'
import React, { Component } from "react";

export default class SquareData extends Component {
   value = 10;

   constructor() {
     super();
     this.state = {
       d: true,
       DD: this.value
       
      };
    }
    render() {
    return (
      <>
        <div id="Heading">SquareData  {this.state.DD}</div>
      </>
    );
  }
}
