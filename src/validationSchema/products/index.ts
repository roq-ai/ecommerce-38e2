import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
