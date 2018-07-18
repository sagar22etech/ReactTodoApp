import React, { Component } from 'react';
import './App.css';
// import data from './data.json';
import List from './list.js';
import AddToDo from './addtodo.js';
import "./style.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.count=0;
    this.state = {
      todo: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }
  addTodo = (todo) => {
    const newToDoList = this.state.todo;
    newToDoList.push({ id: this.count++, name: todo, checked: false });
    this.setState({ todo: newToDoList });
  }
  editTodo = (newTodo, id) => {
    console.log(newTodo);
    
    const checkList = this.state.todo;
    this.state.todo.forEach((li, i) => {
      if (id === li.id.toString()) {
        if (newTodo === "") {
          checkList.splice(i, 1);
          this.setState({ todo: checkList });
        }
        else {
          checkList[i].name = newTodo;
          this.setState({ todo: checkList });
        }

      }
      else {
        this.setState({ todo: this.state.todo });
      }
    });
  }
  checkTodo = (id) => {
    const checkList = this.state.todo;
    console.log(checkList);
    
    this.state.todo.forEach((li, i) => {
      if (id === li.id.toString()) {
        checkList[i].checked = !checkList[i].checked;
        this.setState({ todo: checkList });
      }
      else {
        this.setState({ todo: this.state.todo });
      }
    });
  }
  deleteTodo = (id) => {
    const list = this.state.todo;
    this.state.todo.forEach((data, i) => {
      if (id === data.id.toString()) {
        console.log(id+"&&&"+data.id);
        list.splice(i, 1);
        console.log(list);
        this.setState({ todo: list });
      }
    })
  }

  render() {
    return (<div className='container'>
      <h1 className='heading'>ToDo App</h1>
      <List listItem={this.state.todo} checkTodo={this.checkTodo} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
      <AddToDo onSubmit={this.addTodo} />
    </div>
    );
  }
}

export default App;
