import React from 'react';

export default class ContactCard extends React.Component {
  render() {
    return (
      <div className="contact-card">
        <img src={this.props.contact.imgUrl} alt-text="image"/>
        <h3>{this.props.contact.name}</h3>
        <p>Phone: {this.props.contact.phone}</p>
        <p>Email: {this.props.contact.email}</p>
      </div>
    )
  }
}