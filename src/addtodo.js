import React from 'react';

export default class AddToDo extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        newTodo:''
      }
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
    }
    onChange=(event)=>{
      this.setState({newTodo:event.target.value});
    }
    onSubmit=(event)=>{
      event.preventDefault();
      this.props.onSubmit(this.state.newTodo);
    }
    render(){
        return (<form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="todo">ToDo</label>
          <input type="text" className="form-control" onChange={this.onChange} placeholder="Enter Todo"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>);
    }
}