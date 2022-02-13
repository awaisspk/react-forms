import {Button, Input} from '@nextui-org/react';
import {FormModel, formModel} from './FormModel/userFormModel';
import React from 'react';
import {Controller, UseFormReturn} from 'react-hook-form';
import {Box} from '@components/Box';

type Props = {
  form: UseFormReturn<FormModel>;
  onSubmit: (data: FormModel) => any;
};

export const CreateUserView = ({form, onSubmit}: Props) => {
  const {formId, formFields} = formModel;
  const {firstName, lastName, email, password} = formFields;
  const {handleSubmit, formState, control} = form;
  const {errors} = formState;

  return (
    <Box
      css={{
        width: 'min(500px,100%)',
      }}
    >
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            '& div': {width: '100%'},
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
              name="password"
              control={control}
              render={({field}) => (
                <Input.Password
                  {...field}
                  type="password"
                  bordered
                  placeholder={password.label}
                  autoComplete="password"
                />
              )}
            />
            <span style={{color: 'red'}}>{errors?.password?.message}</span>
          </div>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};
