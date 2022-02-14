export const FormModel = {
  step1: {
    firstName: {
      name: 'firstName',
      label: 'First name',
      requiredErrorMsg: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name',
      requiredErrorMsg: 'Last name is required',
    },
    birthDay: {
      name: 'birthDay',
      label: 'Birth day',
      requiredErrorMsg: 'birthday date is required',
      invalidErrorMsg: 'date is not valid',
    },
  },
  step2: {
    country: {
      name: 'country',
      label: 'Country',
      requiredErrorMsg: 'country name is required',
    },
    city: {
      name: 'city',
      label: 'City',
      requiredErrorMsg: 'city name is required',
    },
    postalCode: {
      name: 'postalCode',
      label: 'Postal Code*',
      requiredErrorMsg: 'postal code is  required',
      invalidErrorMsg: 'postal code is invalid',
    },
    address: {
      name: 'address',
      label: 'Address',
      requiredErrorMsg: 'address is required',
    },
  },
  step3: {
    email: {
      name: 'email',
      label: 'Email',
      requiredErrorMsg: 'email is required',
      invalidErrorMsg: 'invalid email (e.g user@example.com)',
    },
    phone: {
      name: 'phoneNumber',
      label: 'Phone number',
      requiredErrorMsg: 'phone number is required',
      invalidErrorMsg: 'phone number is not valid',
    },
  },
};

export type Step1Fields = typeof FormModel.step1;
export type Step2Fields = typeof FormModel.step2;
export type Step3Fields = typeof FormModel.step3;
