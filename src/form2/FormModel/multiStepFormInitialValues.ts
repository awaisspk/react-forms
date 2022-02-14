import {FormModel} from './multiStepFormModel';

const {step1, step2, step3} = FormModel;
const {firstName, lastName, birthDay} = step1;
const {address, city, country, postalCode} = step2;
const {phone, email} = step3;

export const FormInitialValues = {
  step1: {
    [firstName.name]: '',
    [lastName.name]: '',
    [birthDay.name]: '',
  },
  step2: {
    [address.name]: '',
    [city.name]: '',
    [country.name]: '',
    [postalCode.name]: '',
  },
  step3: {
    [email.name]: '',
    [phone.name]: '',
  },
};
