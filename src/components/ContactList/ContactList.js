import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import withTheme from "../../hoc/withTheme";
import propTypes from "prop-types";

const ContactList = ({contacts, onRemoveContact, style}) => (
  <ul className="Contact" style={style}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onRemoveContact={()=>onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes= {
  contacts: propTypes.arrayOf(propTypes.exact({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired
  })),
  onRemoveContact: propTypes.func.isRequired
}

export default withTheme(ContactList);