export const formModel = {
  formId: 'userRegistration',
  formFields: {
    firstName: {
      name: 'firstName',
      label: 'First Name*',
      requiredErrorMsg: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name*',
      requiredErrorMsg: 'Last name is required',
    },
    email: {
      name: 'email',
      label: 'Email',
      requiredErrorMsg: 'Email is required',
      invalidErrorMsg: 'Email is not valid',
    },
    password: {
      name: 'password',
      label: 'Password',
      requiredErrorMsg: 'Password is required',
    },
  },
};

export type FormModel = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
