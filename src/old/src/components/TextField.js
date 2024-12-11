import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const TextField = ({ type, name, label, isTextarea = false, ...rest }) => (
  <Field
    type={type}
    name={name}
    render={({ field: { value, onChange }, form: { isSubmitting, touched, errors } }) => (
      <div>
        <label htmlFor={name}>{label}</label>
        {isTextarea ? (
          <textarea
            type={type}
            onChange={onChange}
            disabled={isSubmitting}
            value={value}
            name={name}
            {...rest}
          />
        ) : (
          <input
            type={type}
            onChange={onChange}
            disabled={isSubmitting}
            value={value}
            name={name}
            {...rest}
          />
        )}
        {errors[name] && touched[name] ? <p style={{ color: 'red' }}>{errors[name]}</p> : null}
      </div>
    )}
  />
);

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextField;
