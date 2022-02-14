import {Box} from '@components/Box';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Input} from '@nextui-org/react';
import {Controller, useForm} from 'react-hook-form';
import {Step3Fields, Step3Validation} from '../FormModel';
import {CompleteData} from '../types';

type FormFields = {
  phoneNumber?: string;
  email?: string;
};

type Props = {
  formFields: Step3Fields;
  validation: Step3Validation;
  defaultValues: FormFields;
  handleFormSubmit: (data: CompleteData) => Promise<void>;
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

export const Step3 = ({
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

  const {email, phone} = formFields;

  const onSubmit = (data: FormFields): any => {
    handleFormSubmit({...data});
    handleNextStep();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} id="form3">
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
              name="email"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="email"
                  bordered
                  placeholder={email.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.email?.message}</span>
          </div>
          <div>
            <Controller
              name="phoneNumber"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="tel"
                  bordered
                  placeholder={phone.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.phoneNumber?.message}</span>
          </div>

          <Box css={{display: 'flex', justifyContent: 'space-between'}}>
            <Button type="button" onClick={handlePrevStep}>
              Prev
            </Button>
            <Button type="submit">Submit</Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
