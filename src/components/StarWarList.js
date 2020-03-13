import React from 'react';

export default class StarWarsList extends React.Component {

  getMoreDetails(homeworld) {
    fetch(homeworld).then(response => response.json())
    .then(data => {
        this.worldDetails = data;
        this.setState({
          worldDetails: this.worldDetails
        })
        this.componentDidUpdate()
    })
  }
  
  componentDidUpdate(){
    this.render()
  }

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
        <button onClick={() => this.getMoreDetails(this.props.character.homeworld)}>Get More Details about <b>{this.props.character.name}</b></button>
        {/* <div>{!!this.state.worldDetails ? <h1>{this.state.worldDetails.name}</h1>: null}</div> */}
      </div>
    )
  }
}