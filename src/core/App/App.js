import React, { Component } from 'react'

import { ConnectedControl as Control } from '../../components/Control/Control'
import { ConnectedList as List } from '../../components/List/List'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='block'>
        <h3>Do ur thing and get the hell out of here</h3>
        <Control  />
        <List />
      </div>
    )
  }
}

export { App }