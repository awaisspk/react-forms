import {FormSchema} from '@src/lib/formSchema';
import {FormData} from 'pages/basic-form';
import {useCallback} from 'react';

export const useYupValidationResolver = (validationSchema: FormSchema) =>
  useCallback(
    async (data: FormData) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
