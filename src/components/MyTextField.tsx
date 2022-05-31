import React from 'react';
import {TextField} from "@mui/material";
import {useField} from "formik";
import {BaseTextFieldProps} from "@mui/material/TextField/TextField";

type MyTextFieldProps = {
  label: string,
  name: string,
  fullWidth?: boolean
}

const MyTextField: React.FC<MyTextFieldProps> = (props) => {
  const [field, meta] = useField(props);
  const textFieldConfig: BaseTextFieldProps = {
    ...field,
    ...props,
    variant: 'outlined'
  };

  if (meta && meta.touched && meta.error) {
    textFieldConfig.error = true;
    textFieldConfig.helperText = meta.error;
  }

  return (
    <TextField {...textFieldConfig}/>
  );
};

export default MyTextField;