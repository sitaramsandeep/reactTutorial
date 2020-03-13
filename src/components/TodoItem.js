import React from 'react';

export default class TodoItem extends React.Component {
  
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
  }
    return(
    <div className="todo-item">
      <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)}/>
      <p style={this.props.item.completed ? completedStyle: null} >{this.props.item.text}</p>
    </div>
    )
  }
}

