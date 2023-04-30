import { Form } from 'components/common/GeneralForm.styled';
import { FormLabel } from 'components/common/FormLabel.styled';
import { FormInput } from 'components/common/FormInput.styled';
import { CommonButton } from 'components/common/CommonButton.styled';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <FormInput type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" />
      </FormLabel>
      <CommonButton type="submit">Log In</CommonButton>
    </Form>
  );
};
