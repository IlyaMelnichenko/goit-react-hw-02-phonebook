import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';


const schema = Yup.object().shape({
  Name: Yup.string()
  .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
  .required('This is required!')
  .min(4, 'Too Short!')
  .max(50, 'Too Long!'),
  Number: Yup.string()
  .matches(/^\+?[0-9]{1,3}-?[0-9]/, 'Invalid number')
  .required('This is required!') 
  .min(6, 'Too Short!')
  .max(20, 'Too Long!'),
});

export const ContactForm = ({
  
  addPhoneCard,
  }) => {
  return (
    <>
      
      <Formik
        initialValues={{
          Name: '',
          Number: '',
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
            <Field type='tel' name="Number" />
            <ErrorMessage name="Number" component="div" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
      
      
    </>
  );
};
