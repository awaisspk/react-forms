import {Box} from '@components/Box';
import {Spacer} from '@nextui-org/react';
import {FormInitialValues} from './FormModel';
import React, {useEffect, useState} from 'react';
import {FormModel, formValidationSchema} from './FormModel';
import {Step1} from './Steps/Step1';
import {Step2} from './Steps/Step2';
import {Step3} from './Steps/Step3';
import {CompleteData} from './types';
import {Success} from './Steps/Success';

export const MultiStepFormLogic = () => {
  const {step1, step2, step3} = FormInitialValues;
  const defaultvalues = {...step1, ...step2, ...step3};

  const [formData, setFormData] = useState<CompleteData>(
    defaultvalues as CompleteData
  );
  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log('-------');
    console.log(formData);
    console.log('-------');
  }, [formData]);

  const handleSubmit = async (data: CompleteData) => {
    const newData = {
      ...formData,
      ...data,
    };

    formData === null ? setFormData(data) : setFormData(newData);
  };

  const handleNextStep = () => {
    if (step === 3) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  return (
    <Box
      css={{
        width: 'min(400px, 100%)',
      }}
    >
      {step === 3 ? (
        <Success data={formData} />
      ) : step === 0 ? (
        <Step1
          formFields={FormModel.step1}
          validation={formValidationSchema[0]}
          handleFormSubmit={handleSubmit}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          defaultValues={formData}
        />
      ) : step === 1 ? (
        <Step2
          formFields={FormModel.step2}
          validation={formValidationSchema[1]}
          handleFormSubmit={handleSubmit}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          defaultValues={formData}
        />
      ) : (
        <Step3
          formFields={FormModel.step3}
          validation={formValidationSchema[2]}
          handleFormSubmit={handleSubmit}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          defaultValues={formData}
        />
      )}
      <Spacer y={1.3} />
    </Box>
  );
};
