import React from "react";
import { ContactForm, Filter } from "./index"; 
import { ContactList } from './ContactList/ContactList'


class App extends React.Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: ''
  }
  
  formSubmitHandler = (data) => {
    this.setState((prevState) => {
      return prevState.contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase()) ?
        alert(`${data.name} is already in contacts.`) :
        { contacts: [...prevState.contacts, data] };      
    })
  }

  deleteContact = (id) => {
    this.setState((prevState) => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== id) } ;
    })
  };

  changeFilter = e => { this.setState({filter: e.currentTarget.value})};

  showContactByName = () => { const { contacts, filter } = this.state; 
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  };

  render() {
     return (
    <div
      style={{
        height: '100vh',
          display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ><h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

  <h2>Contacts</h2>
         <Filter value={this.state.filter} onChange={this.changeFilter} />
         
         <ContactList contacts={this.showContactByName()} onDeleteContact={this.deleteContact} />
    </div>
  ); }

  
};

export default App;