import {Box} from '@components/Box';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Input} from '@nextui-org/react';
import {Controller, useForm} from 'react-hook-form';
import {Step2Fields, Step2Validation} from '../FormModel';
import {CompleteData} from '../types';

type FormFields = {
  country?: string;
  city?: string;
  postalCode?: string;
  address?: string;
};

type Props = {
  formFields: Step2Fields;
  defaultValues: FormFields;
  validation: Step2Validation;
  handleFormSubmit: (data: CompleteData) => Promise<void>;
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

export const Step2 = ({
  formFields,
  validation,
  handleFormSubmit,
  handleNextStep,
  handlePrevStep,
  defaultValues,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormFields>({
    defaultValues,
    resolver: yupResolver(validation),
  });

  const {address, country, city, postalCode} = formFields;

  const onSubmit = (data: FormFields): any => {
    handleFormSubmit({...data});
    handleNextStep();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} id="form2">
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flex: '400px 0 1',
          }}
        >
          <div>
            <Controller
              name="country"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="text"
                  bordered
                  placeholder={country.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.country?.message}</span>
          </div>
          <div>
            <Controller
              name="city"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="text"
                  bordered
                  placeholder={city.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.city?.message}</span>
          </div>
          <div>
            <Controller
              name="address"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="text"
                  bordered
                  placeholder={address.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.address?.message}</span>
          </div>
          <div>
            <Controller
              name="postalCode"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="number"
                  bordered
                  placeholder={postalCode.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.postalCode?.message}</span>
          </div>

          <Box css={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type="button" onClick={handlePrevStep}>
              Prev
            </Button>
            <Button type="submit">Next</Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
