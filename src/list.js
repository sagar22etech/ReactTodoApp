import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange = (event) => {
        this.props.checkTodo(event.target.id);
    }
    onEdit(e) {
        this.props.editTodo(e.target.value, e.target.id);
    }
    onClick(e) {
        this.props.deleteTodo(e.target.id);
    }

    render() {
        return (<ul className="list-group">
            {this.props.listItem.map((data, i) =>
                <li key={this.props.listItem[i].id} className="list-group-item">
                    <input checked={data.checked}
                        type='checkbox'
                        style={{ 'verticalAlign': 'sub' }} onChange={this.onChange}
                        id={this.props.listItem[i].id}
                    />
                    <input type='text' id={this.props.listItem[i].id} value={data.name} onChange={(e) => this.onEdit(e)} style={{ "border": "none" }} />
                    {data.checked ?
                        <div className="badges"><span className='badge badge-success'>Complete</span>&nbsp;&nbsp;<span className='badge badge-success' id={this.props.listItem[i].id} onClick={(e) => this.onClick(e)}>Delete</span></div> :
                        null}
                </li>
            )}
        </ul>);
    }
}