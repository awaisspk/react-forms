import moment from 'moment';
import * as yup from 'yup';
import {FormModel} from './multiStepFormModel';

const {step1, step2, step3} = FormModel;
const {firstName, lastName, birthDay} = step1;
const {address, city, country, postalCode} = step2;
const {phone, email} = step3;

export const formValidationSchema = [
  yup.object({
    [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
    [lastName.name]: yup.string().required(lastName.requiredErrorMsg),
    [birthDay.name]: yup
      .string()
      .nullable()
      .required(birthDay.requiredErrorMsg)
      .test('birthDay', birthDay.invalidErrorMsg, (val) => {
        if (val) {
          const today = new Date();
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBefore(today);
          }
          return false;
        }
        return false;
      }),
  }),

  yup.object({
    [address.name]: yup.string().required(address.requiredErrorMsg),
    [city.name]: yup.string().required(address.requiredErrorMsg),
    [country.name]: yup.string().required(country.requiredErrorMsg),
    [postalCode.name]: yup
      .number()
      .required(postalCode.requiredErrorMsg)
      .test('postalCode', postalCode.invalidErrorMsg, (val) => {
        if (val) {
          return val.toString().length === 5;
        }
        return false;
      }),
  }),

  yup.object({
    [email.name]: yup
      .string()
      .email(email.invalidErrorMsg)
      .required(email.requiredErrorMsg),
    [phone.name]: yup
      .string()
      .required(phone.requiredErrorMsg)
      .test('phoneNumber', phone.invalidErrorMsg, (val) => {
        if (val) {
          console.log(val);
          return val.toString().length === 12;
        }
        return false;
      }),
  }),
];

export type Step1Validation = typeof formValidationSchema[0];
export type Step2Validation = typeof formValidationSchema[1];
export type Step3Validation = typeof formValidationSchema[2];
