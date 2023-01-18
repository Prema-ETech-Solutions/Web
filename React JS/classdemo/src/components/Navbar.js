
import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
      return (
          <>
              <header id='head-nav'>
                  <nav id='nav-nav'>
                      <div id='Logo-div'>
                          <label className='Logo'>Logo</label>
                      </div>
                      <div id='nav-pages'>
                          <ul id='nav-ul'>
                              <li className='nav-li'><a href="/" >Page 1</a></li>
                              <li className='nav-li'><a href="/" >Page 2</a></li>
                              <li className='nav-li'><a href="/" >Page 3</a></li>
                              <li className='nav-li'><a href="/" >Page 4</a></li>
                          </ul>
                      </div>
                  </nav>
              </header>
          </>
    )
  }
}
