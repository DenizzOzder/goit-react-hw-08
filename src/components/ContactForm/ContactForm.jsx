import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    dispatch(addContact(values)).finally(() => actions.resetForm());
  };

  return (
    <div className={`card ${css.card}`}>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
        <Form className={css.form}>
          <div>
            <label className="label" htmlFor="name">Name</label>
            <Field id="name" name="name" className="input" required />
          </div>
          <div>
            <label className="label" htmlFor="number">Phone</label>
            <Field id="number" name="number" className="input" required />
          </div>
          <button type="submit" className="btn btnPrimary">Add</button>
        </Form>
      </Formik>
    </div>
  );
}
