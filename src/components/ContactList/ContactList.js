import { ContactListItem } from './ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(el => (
        <ContactListItem
          contact={el}
          onDeleteContact={onDeleteContact}
          key={el.id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
