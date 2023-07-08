import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  state = { name: '', number: '', id: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: nanoid() });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          border: '2px solid #111',
          borderRadius: '4px',
          padding: '20px',
          width: '500px',
        }}
      >
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Name
          <input
            style={{ width: '200px' }}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Number
          <input
            style={{ width: '200px' }}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button style={{ width: '100px', cursor: 'pointer' }} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
