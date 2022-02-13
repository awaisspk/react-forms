import {Container, Spacer, Text} from '@nextui-org/react';
import {Form1} from '@src/Form1';
import React from 'react';

const MultiStepForm = () => {
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
      <Form1 />
    </Container>
  );
};

export default MultiStepForm;
