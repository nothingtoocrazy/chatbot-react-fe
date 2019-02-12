import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  makeACall = async () => {
    try {
      const response = await fetch('http://chatbot.test/match', {
        method: 'post',
        body: JSON.stringify({
          "start_date": "2019-01-18 18:45:00",
	        "end_date": "2019-01-19 18:45:00"
        }),
      })
      const json = await response.json();
      console.log('-->', json);
    } catch (err) {

    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.makeACall}>click meh</button>
      </div>
    );
  }
}

export default App;
