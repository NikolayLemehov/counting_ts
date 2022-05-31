import React from 'react';
import {Form, Formik, FormikHelpers, FormikValues} from "formik";
import yup from "./validation"
import MyTextField from "../MyTextField";
import {useDispatch} from "react-redux";
// import {addOperation} from "../../asyncAction/addOperation";
import DatePicker from "../DatePicker";
import {formatDate} from "../../utils/formatDate";
import {Button, Stack} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IInitialValues {
  value: string
  date: string
}

const initialValues: IInitialValues = {
  value: '',
  date: formatDate(new Date()),
}
const validationSchema = yup.object({
  value: yup.number().twoDecimalSign().required('Required'),
  date: yup.date()
    .required('Required'),
})

const MyForm: React.FC = () => {
  const {btnLoading} = useTypedSelector(state => state.operation)
  const {addOperation} = useActions()
  const onSubmit = (values: FormikValues, actions: FormikHelpers<IInitialValues>) => {
    const {date, value} = values
    addOperation({date, value: +value})
    // dispatch(addOperation({date, value}))
    actions.resetForm({
      values: {
        value: '',
        date: formatDate(new Date()),
      }
    })
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Stack spacing={2}>
            <MyTextField
              label="Value"
              name="value"
            />
            <Stack spacing={2} direction="row">
              <DatePicker
                label="Date"
                name="date"
              />

              <Button
                type="submit"
                variant="contained"
                disabled={btnLoading}
              >Submit</Button>
            </Stack>
          </Stack>
        </Form>
      </Formik>
      <br/>
    </>
  );
};

export default MyForm;