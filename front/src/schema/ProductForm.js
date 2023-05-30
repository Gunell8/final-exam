import * as yup from 'yup';
export const ProductForm = yup
  .object()
  .shape({
    name: yup.string().required(),
    title: yup.string().required(),
  })
  .required();