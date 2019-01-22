import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spring, Transition, animated } from 'react-spring';

import Dummy from './components/Dummy';

const btnStyles = {
  background: 'white',
  color: '#333',
  padding: '1rem',
  margin: '1rem 0',
  textTransform: 'uppercase',
};
class App extends Component {
  state = {
    showDummy: false
  };

  toggle = e => {
    this.setState({ showDummy: !this.state.showDummy });
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ delay: 1000, duration: 2000 }}
      >
        {props => (
          <div className="App" style={props}>
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <Spring
                  from={{ number: 0 }}
                  to={{ number: 10 }}
                  config={{ duration: 10000 }}
                >
                  {props => <div>
                    {props.number < 10
                      ? props.number.toFixed()
                      : <button style={btnStyles} onClick={this.toggle}>
                        Toggle Dummy Component
                    </button>
                    }
                  </div>}
                </Spring>
                <Transition
                  native
                  items={this.state.showDummy}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {show =>
                    show &&
                    (props => (
                      <animated.div style={props}>
                        <Dummy />
                      </animated.div>
                    ))
                  }
                </Transition>
              </header>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default App;
