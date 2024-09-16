import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd/MM/yyyy"
    />
  );
};

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DateInput;
