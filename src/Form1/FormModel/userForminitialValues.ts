import {formModel} from './userFormModel';

const {
  formFields: {password, email, lastName, firstName},
} = formModel;

export const FormDefaultValues = {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [password.name]: '',
};
