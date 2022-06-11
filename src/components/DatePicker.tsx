import React, {useEffect} from 'react';
import {useField} from "formik";
import {TextField} from "@mui/material";
import {BaseTextFieldProps} from "@mui/material/TextField/TextField";
import {useActions} from "../hooks/useActions";
import {useDebounce} from "../hooks/useDebounce";

type DatePickerProps = {
  label: string,
  name: string,
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [field, meta] = useField(props.name);
  const textFieldConfig: BaseTextFieldProps = {
    ...field,
    ...props,
    type: 'date',
    variant: 'outlined',
    InputLabelProps: {shrink: true},
  };
  const {fetchRating} = useActions().rating
  const debouncedFieldValue = useDebounce(field.value, 500)
  useEffect(() => {
    fetchRating(new Date(debouncedFieldValue))
  }, [debouncedFieldValue]) // eslint-disable-line react-hooks/exhaustive-deps

  if (meta && meta.touched && meta.error) {
    textFieldConfig.error = true;
    textFieldConfig.helperText = meta.error;
  }

  return (
    <TextField {...textFieldConfig}/>
  );
}

export default DatePicker;