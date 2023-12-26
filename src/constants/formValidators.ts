import * as yup from 'yup';

export const footerFormValidator = yup
  .object({
    email: yup.string().required('Email is required!').email('Email format is invalid!'),
    fullName: yup.string().required('Full Name is required!'),
    message: yup.string().required('Message is required!'),
  })
  .required();

export const contactFormValidator = yup
  .object({
    email: yup.string().required('Email is required!').email('Email format is invalid!'),
    fullName: yup.string().required('Full Name is required!'),
    message: yup.string().required('Message is required!'),
    query: yup.string().required('Query is required!'),
  })
  .required();
