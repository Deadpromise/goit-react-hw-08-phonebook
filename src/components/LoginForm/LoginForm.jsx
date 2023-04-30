import { Form } from 'components/common/GeneralForm.styled';
import { FormLabel } from 'components/common/FormLabel.styled';
import { FormInput } from 'components/common/FormInput.styled';
import { CommonButton } from 'components/common/CommonButton.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
