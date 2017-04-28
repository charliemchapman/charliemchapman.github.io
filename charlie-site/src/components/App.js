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
        <section className="app__section">
          <div className="profile-image">
            <img className="profile-image__img" src="https://lh3.googleusercontent.com/deLY4gn0W4ANAYoD8sAGHinvE1kfFARZxkGinR52mW5uuwQeBCeF0b7urkwCYlKJvVzFWs3e8eGxavQgYb9BE32bYRUZKlu-BVsO3NGWrxsOE_Y4T5KBwEoMXTkKFnQec3QYSc_oIBmHbuhfJ3ao4uxT76sADg1QMKTKQOIaY3F7jot4Qz9s9Sgrhz6Z1o4vBTJT6bZnLHtvkNORoRvmH5Ld0Ol1-02WfV9JQ9P68bUB5mHsqTn5hn2Wjz9E1H5TWIajRB_UgCKw-0MogVEYD1O2NWTqa1so-FGKsILrdXvFiQQWn3W9hkIYvzANDr9lxEr0WwoO3rB3isdG5dEOBr1zmIm6FaVhfc8HP9TB_urxV1hoyYIJLQRyz88rawxhcWukMHu6LMWjX97SiUxvBnTH9Jko7PjZGrDgYHb4HKzoQIx8hPn6q1z5fUm1bAUIaqQOtOp_Am64JGbxe5Wh1FDC7LaUa9OtIJEfQ2bebZrlaqakfzXiPNt-AhWcEGV3LHlAONDJ1bnYpFE9fD61N1N0I6nxmYsN8OeLcV23jLJdyEHJZDGCI9XmdBY3Ir8KY0BTBX4MXqCFBCTnvtuNvh3NrtJieLkn6AeYY_nkuNN1twhsiWfXwQ=s844-no"/>
          </div>
          <div className="para">
            <p>My name is <strong>Charlie Chapman</strong> and I write software for a living.</p>
          </div>
        </section>
        <h1 className="section-header">I have a some <span className="bold">skills</span></h1>
        <section className="app__section app__section--lists">
          <div className="list">
            <h4>Javscript</h4>
            <ul className="skills-list">
              <li>React</li>
              <li>Mocha</li>
              <li>Nightmare Js</li>
              <li>Node</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="list">
            <h4>.Net</h4>
            <ul className="skills-list">
              <li>MVC</li>
              <li>Web Api</li>
              <li>Windows 8</li>
              <li>Windows Phone</li>
              <li>XAML</li>
              <li>Selenium</li>
              <li>Moq</li>
            </ul>
          </div>
          <div className="list">
            <h4>Other</h4>
            <ul className="skills-list">
              <li>HTML5</li>
              <li>CSS</li>
              <li>Jenkins</li>
              <li>Azure</li>
              <li>AWS</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
