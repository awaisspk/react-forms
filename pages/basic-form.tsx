import {
  Container,
  Input,
  Spacer,
  Text,
  styled,
  Button,
} from '@nextui-org/react';
import {useYupValidationResolver} from '@src/hooks/useValidationResolver';
import {formSchema} from '@src/lib/formSchema';
import {ComponentProps} from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';

const Form = styled('form', {
  display: 'grid',
  gap: '$7',
  gridAutoRows: 'auto',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `"firstName " "lastName" "email" "password" "submit"`,

  '@media screen and (min-width: 640px)': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `"firstName lastName" "email email" "password password" "submit submit"`,
  },
});

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const BasicFormPage = () => {
  const resolver = useYupValidationResolver(formSchema);
  const methods = useForm<FormData>({resolver});

  const {handleSubmit} = methods;

  const onSubmit: SubmitHandler<FormData> = (data) =>
    alert(JSON.stringify(data));

  return (
    <Container fluid css={{dflex: 'center'}}>
      <Container css={{width: 'min(500px, 100%)'}}>
        <Spacer y={3.5} />
        <Text h1 css={{textAlign: 'center'}}>
          Sign Up Form
        </Text>
        <Spacer y={1.5} />
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{gridArea: 'firstName'}}>
              <TextInput type="text" label="FirstName" name="firstName" />
            </div>
            <div style={{gridArea: 'lastName'}}>
              <TextInput type="text" label="LastName" name="lastName" />
            </div>
            <div style={{gridArea: 'email'}}>
              <TextInput type="email" label="Email" name="email" />
            </div>
            <div style={{gridArea: 'password'}}>
              <TextInput type="password" label="Password" name="password" />
            </div>
            <div style={{gridArea: 'submit'}}>
              <Button type="submit" css={{width: '100%'}}>
                Submit
              </Button>
            </div>
          </Form>
        </FormProvider>
      </Container>
    </Container>
  );
};

export default BasicFormPage;

type TextInputProps = {
  name: string;
  label: string;
  type: 'email' | 'text' | 'password';
};

type InputProps = TextInputProps & ComponentProps<typeof Input>;

const TextInput = (props: InputProps) => {
  const {control} = useFormContext();
  const {name, label, type, css, ...rest} = props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({field}) => {
          return type === 'password' ? (
            <Input.Password
              {...field}
              css={css}
              placeholder={label}
              bordered
              fullWidth
            />
          ) : (
            <Input
              {...field}
              {...rest}
              type={type}
              placeholder={label}
              bordered
              fullWidth
            />
          );
        }}
      />
    </div>
  );
};

/*
first Name signup form
last Name
email
password
*/
