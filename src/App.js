import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const users = [
  {
    'id': 0,
  	'first': 'Yushan',
    'last': 'Fernando',
    'username': 'webdev',
    'count': '0'
  },
  {
    'id': 1,
  	'first': 'Neville',
    'last': 'Fernando',
    'username': 'Fernando',
    'count': '0'
  },
  {
    'id': 2,
  	'first': 'Yushanthie',
    'last': 'Fernando',
    'username': 'Daam',
    'count': '0'
  },
  {
    'id': 3,
  	'first': 'Shivanthie',
    'last': 'Fernando',
    'username': 'onedirection',
    'count': '0'
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserDetails users={users} />
      </div>
    );
  }
}

export default App;
