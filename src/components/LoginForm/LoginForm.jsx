import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .catch(() => {})
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <div className={`card ${css.card}`}>
      <h2 className={css.title}>Sign in</h2>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={css.form} autoComplete="off">
          <div className={css.row}>
            <label className="label" htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" className="input" required />
          </div>
          <div className={css.row}>
            <label className="label" htmlFor="password">Password</label>
            <Field id="password" type="password" name="password" className="input" required />
          </div>
          <div className={css.actions}>
            <button type="submit" className="btn btnPrimary">Log In</button>
            <button type="reset" className="btn btnGhost">Clear</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
