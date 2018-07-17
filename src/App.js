import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import List from './list.js';
import AddToDo from './addtodo.js';
import "./style.css"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo : data
    }
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo){
    const newToDoList = this.state.todo;
    newToDoList.push({id: newToDoList.length, name: todo, checked: false});
    this.setState({todo:newToDoList});
  }
  
  render() {
  return (<div className='container'>
          <h1 className='heading'>ToDo App</h1>
          <List listItem = {this.state.todo}/>
          <AddToDo onSubmit={this.addTodo}/>
          </div>
         );
  }
}

export default App;
