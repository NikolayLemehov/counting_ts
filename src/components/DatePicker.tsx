import React from 'react';
import {useField} from "formik";
import {TextField} from "@mui/material";
import {BaseTextFieldProps} from "@mui/material/TextField/TextField";

type DatePickerProps = {
  label: string,
  name: string,
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [field, meta] = useField(props);
  const textFieldConfig: BaseTextFieldProps = {
    ...field,
    ...props,
    type: 'date',
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    }
  };

  if (meta && meta.touched && meta.error) {
    textFieldConfig.error = true;
    textFieldConfig.helperText = meta.error;
  }

  return (
    <TextField {...textFieldConfig}/>
  );
}

export default DatePicker;