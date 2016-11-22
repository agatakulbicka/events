import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Menu/>
          {this.props.children}
        </div>
    );
  }
}
export default App;