import React from 'react';

export default class Header extends React.Component{
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
  
    if (hours < 12) {
      timeOfDay = 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'Good Afternoon';
    } else {
      timeOfDay = 'Good Night';
    }
  
    const styles = {
      color: 'orange',
      backgroundColor:'#333333'
    }
    return(
      <div>
        <header>
          <h1 className="H1" > <b style={styles}>{`${timeOfDay}!`}</b> This is my React Tutorial App</h1>
        </header>
      </div>
    )
  }
}