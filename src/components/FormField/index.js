import React from 'react';
import { FormFieldBase, Input, TextArea } from './styles';

function FormField({ value, onChange, type, name, label, input}){
  return (
    <FormFieldBase>
        <label>
          {label} 
        </label>
        
        {input 
          ? 
          <Input type={type} name={name} value={value} onChange={onChange} />
          : 
          <TextArea type={type} name={name} value={value} onChange={onChange} /> 
        }            
    </FormFieldBase>
  );
}

export default FormField;