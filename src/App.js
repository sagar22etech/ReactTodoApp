import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import List from './list.js';
import "./style.css"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo : data
    }
  }
  
  render() {
  return (<div className='container'>
          <h1 className='heading'>ToDo App</h1>
          <List listItem = {this.state.todo}/>
          </div>
         );
  }
}

export default App;
