import * as yup from 'yup';
import {formModel} from './userFormModel';

const {
  formFields: {firstName, lastName, email, password},
} = formModel;

export const userValidation = yup.object({
  firstName: yup.string().required(firstName.requiredErrorMsg),
  lastName: yup.string().required(lastName.requiredErrorMsg),
  password: yup.string().required(password.requiredErrorMsg),
  email: yup
    .string()
    .email(email.invalidErrorMsg)
    .required(email.requiredErrorMsg),
});
