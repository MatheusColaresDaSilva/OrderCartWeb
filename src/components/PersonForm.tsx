import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ContactList from './ContactList';
import '../styles/nois.css';
import PersonService from '../service/PersonService';

interface Contact {
  name: string;
  phone: string;
  email: string;
}

interface PersonFormValues {
  name: string;
  sinNumber: number;
  birthDate: Date;
  contacts: Contact[];
  newContact: Contact;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  sinNumber: Yup.number().required('SIN number is required').typeError('SIN number must be a number'),
  birthDate: Yup.date().required('Birth date is required').typeError('Invalid date'),
  contacts: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Contact name is required'),
      phone: Yup.string().required('Contact phone is required'),
      email: Yup.string().email('Invalid email').required('Contact email is required')
    })
  )
});

const PersonForm: React.FC = () => {
  const initialValues: PersonFormValues = {
    name: '',
    sinNumber: 0,
    birthDate: new Date(),
    contacts: [],
    newContact: { name: '', phone: '', email: '' }
  };

  const createNewPerson = (value: PersonFormValues) => {
    return PersonService.createNewPerson(value)
    .then((response:any) => {
        alert('New product added');
      }).catch((error:any) => {
        alert(`Error: ${error.message}`);
      });
    ;
}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);

        createNewPerson(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, errors }) => (
        <Form className="form-container">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="sinNumber">SIN Number</label>
            <Field name="sinNumber" type="number" placeholder="SIN Number" />
            <ErrorMessage name="sinNumber" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="birthDate">Birth Date</label>
            <Field name="birthDate" type="date" placeholder="Birth Date" />
            <ErrorMessage name="birthDate" component="div" className="error-message" />
          </div>

          <ContactList contacts={values.contacts} newContact={values.newContact} errors={errors.contacts} />

          <button type="submit" className="add-contact-button">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonForm;
