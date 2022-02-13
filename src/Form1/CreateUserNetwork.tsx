import React from 'react';
import {CreateUserLogic} from './CreateUserLogic';
import {FormModel} from './FormModel/userFormModel';

export const CreateUserNetwork = () => {
  const handleSubmit = async (data: FormModel): Promise<FormModel> => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
  };

  return (
    <>
      <CreateUserLogic onSubmit={handleSubmit} />
    </>
  );
};
