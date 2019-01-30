import React, { Component } from 'react'
import Button from 'antd/lib/button';
import 'antd/lib/date-picker/style/css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
          <Button type="primary" loading>
            Loading
          </Button>
        </header>
      </div>
    )
  }
}

export default App
