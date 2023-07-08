import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <li
        key={contact.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {contact.name}: {contact.number}
        <button
          style={{ marginLeft: '20px', padding: '4px' }}
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
