import React from 'react';

export default class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.value = '';
    this.state = {
      id: 'text',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (event) => {
    this.value = event.target.value;
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (this.value.trim() !== '') {
      this.props.onSubmit(this.value);
      this.setState({ id: 'text' })
    }
    else {
      this.setState({ id: 'error' })
    }
  }
  render() {
    return (<form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="todo">ToDo</label>
        <input type="text" id={this.state.id} className="form-control" onChange={this.onChange} placeholder="Enter Todo" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>);
  }
}