import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  componentDidMount() {


  }



  render() {
    return (
      <div className="App">
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
        </header>
      </div>
    );
  }
}

export default App;


curl --request POST \
  --url 'https://owner-api.teslamotors.com/' \
  --header 'content-type: application/json' \
  --header 'User-Agent: test' \
  --data '{"grant_type":"password","username": "michael.d.bordelon@gmail.com","password": "Tamu1999!","audience": "https://bordelonapp.com/", "scope": "read:sample", "client_id": "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384", "client_secret": "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3"}'
