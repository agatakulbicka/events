import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import Footer from './footer/Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Menu/>
          {this.props.children}
            <Footer/>
        </div>
    );
  }
}
export default App;