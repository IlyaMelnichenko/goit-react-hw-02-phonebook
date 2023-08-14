import React, { Component } from 'react';
import { ContactForm} from './Phonebook/ContactForm';
import { Filter } from './Phonebook/Filter';
import { PhoneList } from './Phonebook/PhoneList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addPhoneCard = newCard => {
    const checkName = newCard.Name;
    if (
      this.state.contacts.some(
        contact => contact.Name.toLowerCase() === checkName.toLowerCase()
      )
    ) {
      alert(`${checkName} already recorded in the directory`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newCard],
    }));
  };
  changefilterPhone = value => {
    this.setState({
      filter: value,
    });
  };
  getFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.Name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteCard = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const filtered = this.getFiltered();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={filtered}
          addPhoneCard={this.addPhoneCard}
          phoneFilter={this.state.filter}
          changeFilter={this.changefilterPhone}
          shower={this.state.contacts}
          deleteContact={this.deleteCard}
        />
        {this.state.contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <Filter
              changeFilter={this.changefilterPhone}
              phoneFilter={this.state.filter}
            />
          </>
        )}
        <PhoneList contacts={filtered} deleteContact={this.deleteCard} />
      </>
    );
  }
}
