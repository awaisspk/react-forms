import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormModel} from './FormModel/userFormModel';
import {FormDefaultValues} from './FormModel/userForminitialValues';
import {userValidation} from './FormModel/userValidation';
import {CreateUserView} from './CreateUserView';

type Props = {
  onSubmit: (data: FormModel) => Promise<FormModel>;
};

export const CreateUserLogic = ({onSubmit}: Props) => {
  const form = useForm<FormModel>({
    mode: 'onSubmit',
    defaultValues: FormDefaultValues,
    resolver: yupResolver(userValidation),
  });

  const handleSubmit = async (data: FormModel) => {
    await onSubmit(data)
      .then(() => alert(JSON.stringify(data)))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <CreateUserView form={form} onSubmit={handleSubmit} />
    </>
  );
};
