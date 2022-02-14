import {Box} from '@components/Box';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Input} from '@nextui-org/react';
import {Controller, useForm} from 'react-hook-form';
import {Step1Fields, Step1Validation} from '../FormModel';
import {CompleteData} from '../types';

type FormFields = {
  firstName?: string;
  lastName?: string;
  birthDay?: string;
};

type Props = {
  formFields: Step1Fields;
  validation: Step1Validation;
  defaultValues: FormFields;
  handleFormSubmit: (data: CompleteData) => Promise<void>;
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

export const Step1 = ({
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

  const {firstName, birthDay, lastName} = formFields;

  const onSubmit = (data: FormFields): any => {
    handleFormSubmit({...data});
    handleNextStep();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} id="form1">
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
              name="firstName"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="text"
                  bordered
                  placeholder={firstName.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.firstName?.message}</span>
          </div>
          <div>
            <Controller
              name="lastName"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="text"
                  bordered
                  placeholder={lastName.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.lastName?.message}</span>
          </div>
          <div>
            <Controller
              name="birthDay"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  fullWidth
                  type="date"
                  bordered
                  placeholder={birthDay.label}
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.birthDay?.message}</span>
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
