import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.handleClickBtn = this.handleClickBtn.bind(this)
    }

    handleClickBtn() {
        this.props.sayHello()
    }

  render() {
    const {msg} = this.props
    return (
      <div className="App">
          <button onClick={this.handleClickBtn}>Click to Hello</button>
          <p>{ msg.data }</p>
      </div>
    );
  }
}

export default App;
