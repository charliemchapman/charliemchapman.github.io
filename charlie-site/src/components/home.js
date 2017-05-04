import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">
            <div className="home__links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Video">Video</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
