import React from 'react';
import { connect } from '../contexts/form';

const Input = ({
  values,
  name,
  onChange,
}) => {
  return (
    <input value={values[name] || ''} name={name} onChange={e => onChange(e.target.value, name)} />
  );
}

export default connect(Input);
