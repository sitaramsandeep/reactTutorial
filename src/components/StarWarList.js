import React from 'react';

export default class StarWarsList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <span>Name: </span>
            <span>{this.props.character.name}</span>
          </li>
          <li> 
            <span>Gender: </span>
            <span>{this.props.character.gender}</span>
          </li>
        </ul>
        <button onClick={() => this.props.getMoreDetails(this.props.character)}>Get More Details about <b>{this.props.character.name}</b></button>
        { <div>{!!this.props.character.world ? <h1>{this.props.character.world.name}</h1>: null}</div>}
      </div>
    )
  }
}
