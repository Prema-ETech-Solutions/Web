import "./CSS/App.css";
import "./CSS/index.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Square from "./components/Square";
import Card from "./components/Card";
export default class App extends Component {
  render() {
    return (
      <>
        
        {/* 1st */}
        <div id="first">First </div>

        {/* 2nd */}
        <Navbar></Navbar>

        {/* 3rd */}
        <Square data="Hello World !"></Square>
        
        {/* 4th */}
        <div id="card_layout">
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
          <Card img ="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"></Card>
        </div>
        


      </>
    );
  }
}
