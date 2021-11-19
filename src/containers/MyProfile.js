import React, { Component } from 'react'

class MyProfile extends Component {

  state = {
    firstName: 'Arun',
    accountCreated: '04/05/2021'
  }

  handleFirstNameChange = (event) => { // event object
    console.log(event.target); // on what element the event occured
    console.log(event.target.value); // text field's data

    // update the state 
    this.setState( {
      firstName: event.target.value
    });
  }

  render() {
    console.log('Inside Render');
    return (
      <div>

        <p>First Name: {this.state.firstName}</p>
        <input type="text" value={this.state.firstName} 
        onChange={this.handleFirstNameChange}/>

      </div>
    )
  }
}

export default MyProfile;
