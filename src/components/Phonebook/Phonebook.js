import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  Name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  Number: Yup.number()
    .required('Required'),
});

export const Phonebook = ({ contacts,addPhoneCard }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Formik
        initialValues={{
          Name: '',
          Number:0,
        }}
        validationSchema={schema}
        onSubmit={value => {
          addPhoneCard({ ...value, id: nanoid() });
        }}
      >
        <Form>
          <label>
            Name
            <Field name="Name" />
            <ErrorMessage name="Name" component="div" />
          </label>
          <label>
            Number
            <Field name="Number" />
            <ErrorMessage name="Number" component="div" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
      {contacts.length!==0 &&
      <>
      <h2>Contacts</h2>
      
      </>
      }
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.Name}:{contact.Number}</li>
        ))}
      </ul>
    </div>
  );
};
