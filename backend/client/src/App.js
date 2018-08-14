import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Greeting Card</h1>
        </header>
        <div className="form" class="Form"> 
        <form action="" class="form">
        <input type="to" placeholder ="To"/>
        <input type = "from" placeholder = "From"/>
        <textarea class="text" cols="75" rows="10"></textarea>
        <input type = "submit" placeholder = "submit"/>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
