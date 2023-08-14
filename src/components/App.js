import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {

  state = {
    contacts: [],
    filter:''
    };

  addPhoneCard=newCard=>{
    this.setState(prevState=>({
      contacts:[...prevState.contacts,newCard]
     
    }));
  }
  render() {
    return (
      <>
        <Phonebook
          contacts={this.state.contacts}
          addPhoneCard={this.addPhoneCard}
        />
      </>
    );
  }
}
