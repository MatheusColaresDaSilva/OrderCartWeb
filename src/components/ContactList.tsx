import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import '../styles/nois.css';

interface Contact {
  name: string;
  phone: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
  errors?: any;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, errors }) => {
  return (
    <FieldArray name="contacts">
      {({ push, remove }) => (
        <div>
          <div className="contact-header">
            <h3>Contacts</h3>
            <button type="button" className="add-contact-button" onClick={() => push({ name: '', phone: '', email: '' })}>+</button>
          </div>
          <ul className="contact-list">
            {contacts.map((contact, index) => (
              <li key={index}>
                <div>
                  <strong>Name:</strong> {contact.name} <br />
                  <strong>Phone:</strong> {contact.phone} <br />
                  <strong>Email:</strong> {contact.email}
                </div>
                <button type="button" onClick={() => remove(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="form-field">
            <Field name={`newContact.name`} placeholder="Name" />
            <ErrorMessage name={`newContact.name`} component="div" className="error-message" />
          </div>
          <div className="form-field">
            <Field name={`newContact.phone`} placeholder="Phone" />
            <ErrorMessage name={`newContact.phone`} component="div" className="error-message" />
          </div>
          <div className="form-field">
            <Field name={`newContact.email`} placeholder="Email" />
            <ErrorMessage name={`newContact.email`} component="div" className="error-message" />
          </div>
          {errors && typeof errors === 'string' && <div className="error-message">{errors}</div>}
        </div>
      )}
    </FieldArray>
  );
};

export default ContactList;
