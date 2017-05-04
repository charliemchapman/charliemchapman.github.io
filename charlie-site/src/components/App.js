import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './resume';
import Home from './home';
import Video from './video';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/About" component={Resume} />
          <Route path="/Video" component={Video} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
