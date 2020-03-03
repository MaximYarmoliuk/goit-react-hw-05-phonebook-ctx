import React, { Component } from "react";
import { uuid } from "uuidv4";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import ThemeContext from "../contexts/ThemeContext/ThemeContext";
import { themeConfig } from "../contexts/ThemeContext/ThemeContext";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    theme: "light"
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  };

  addContact = ({ name, number }) => {
    const checkOnExist = this.state.contacts.find(
      contact => contact.name === name
    );

    const checkLength = string => string.length < 1;
    const contact = {
      id: uuid(),
      name,
      number
    };

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      alert("Please, fill in all required entry fields");
      return;
    }

    if (checkOnExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <ThemeContext.Provider
        value={{
          type: this.state.theme,
          config: themeConfig[this.state.theme]
        }}
      >
        <div>
          <ThemeSelector toggleTheme={this.toggleTheme} />
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          {contacts.length >= 2 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}

          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}
