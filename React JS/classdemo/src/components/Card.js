import '../CSS/App.css'
import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let {img} = this.props;
    return (
      <img src={img} alt="No Img" id='ings' />
    )
  }
}
