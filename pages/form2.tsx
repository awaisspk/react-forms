import {Container, Spacer, Text} from '@nextui-org/react';
import {MultiStepFormLogic} from '@src/form2/MultiStepFormLogic';
import React from 'react';

const Form2 = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '500px 0 1',
      }}
    >
      <Spacer y={3.5} />
      <Text h1 css={{fontSize: '$lg'}}>
        Multi step form
      </Text>
      <Spacer y={1} />
      <MultiStepFormLogic />
    </Container>
  );
};

export default Form2;
