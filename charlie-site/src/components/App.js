import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app__header">
          <div className="app__hi">
            <div className="h">h</div>
            <div className="i">i</div>
            <div className="p">.</div>
          </div>
        </div>
        <div className="para">
          <p>Hi there!  This obnoxiously large header with epic whitespace and a pithy word is here to show you how fun and elegant I can be.</p>
        </div>
      </div>
    );
  }
}

export default App;
