import { Form } from 'components/common/GeneralForm.styled';
import { FormLabel } from 'components/common/FormLabel.styled';
import { FormInput } from 'components/common/FormInput.styled';
import { CommonButton } from 'components/common/CommonButton.styled';

export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <FormInput type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" />
      </FormLabel>
      <CommonButton type="submit">Register</CommonButton>
    </Form>
  );
};
