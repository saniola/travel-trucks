import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Bounce, toast } from 'react-toastify';
import styles from './BookingForm.module.scss';
import * as Yup from 'yup';
import Button from '../Button/Button';
import DateInput from '../DateInput/DateInput';

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Email must be in format example@domain.com')
    .required('Email is required'),
  date: Yup.date()
    .min(new Date(), 'Date must be in the future')
    .required('Date is required'),
  comment: Yup.string(),
});

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const BookingForm = () => {
  const onFormSubmit = (values, { resetForm }) => {
    toast.success('Your booking was received', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    resetForm();
  };

  return (
    <section className={styles.component}>
      <div className={styles.head}>
        <h3 className={styles.title}>Book your campervan now</h3>
        <p className={styles.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={FormSchema}
      >
        <Form className={styles.form}>
          <div className="input-wrapper">
            <div className="input-container">
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                autoComplete="off"
              />
            </div>
            <ErrorMessage name="name" component="span" className="error" />
          </div>

          <div className="input-wrapper">
            <div className="input-container">
              <Field
                type="text"
                name="email"
                placeholder="Email*"
                autoComplete="off"
              />
            </div>
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div className="input-wrapper">
            <div className="input-container">
              <DateInput name="date" placeholderText="Booking date*" />
            </div>
            <ErrorMessage name="date" component="span" className="error" />
          </div>

          <div className="input-wrapper">
            <div className="input-container">
              <Field
                name="comment"
                component="textarea"
                placeholder="Comment"
                rows="5"
              />
            </div>
          </div>

          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    </section>
  );
};

export default BookingForm;
