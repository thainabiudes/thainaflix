import React from 'react';
import { FormFieldBase, Input, TextArea, Label } from './styles';
import PropTypes from 'prop-types';

function FormField({ value, onChange, type, name, label, input}){
  return (
    <FormFieldBase>
        <Label>
        
        {input 
          ? 
          <Input type={type} name={name} value={value} onChange={onChange} />
          : 
          <TextArea type={type} name={name} value={value} onChange={onChange} /> 
        }    

        <Label.Text>
          {label}
        </Label.Text>

        </Label>        
    </FormFieldBase>
  );
}

FormField.defaultTypes = {
  type: 'text',
  name: '',
  onChange: () => {},
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormField;