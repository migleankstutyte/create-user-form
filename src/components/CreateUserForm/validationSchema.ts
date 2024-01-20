import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First name is too short!')
    .max(50, 'First name is too long!')
    .required('This field is required'),
  lastName: Yup.string()
    .min(2, 'Last name is too short!')
    .max(50, 'Last name is too long!')
    .required('This field is required'),
  phone: Yup.number().required('This field is required').positive().integer(),
  gender: Yup.string().required('This field is required'),
  colors: Yup.array().min(1, 'Pick at least 1 color').required()
});
