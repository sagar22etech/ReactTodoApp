import React from 'react';

export default class List extends React.Component{
    
    render(){
        return (<ul className="list-group">
        {this.props.listItem.map((data,i)=>
            <li key={data.id} className="list-group-item">
            <input checked={data.checked}
            type = 'checkbox'
            style = {{'verticalAlign':'sub'}}
            />
            <span>{data.name}</span>
            {data.checked ? 
            <span className='complete-tag'>complete</span> : 
            null
            }
            </li>
        )}
        </ul>);
    }
}