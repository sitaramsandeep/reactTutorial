import React from 'react';

export default class Joke extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{display: this.props.question ? "block" : "none"}}>Question: {this.props.question}</h3>
        <h3>Answer: {this.props.punchLine}</h3>
        <hr/>
    </div>
    )
  }
}