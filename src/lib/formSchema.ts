import * as yup from 'yup';

export const formSchema = yup.object({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email().required('required'),
  password: yup.string().required('required'),
});

export type FormSchema = typeof formSchema;
