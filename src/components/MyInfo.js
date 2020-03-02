import React from 'react';
import '../index.css';

class MyInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>this is child component</h3> 
        <ul>
          <li>Mercedes</li>
          <li>Ferrari</li>
          <li>RedBull Racing</li>
        </ul>
        <p>Above are the Formula One teams</p> 
      </div>
    )
  }
}


export default MyInfo