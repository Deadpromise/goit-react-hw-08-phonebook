import { NavigatinLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = true;
  return (
    <nav>
      <NavigatinLink to="/">Home</NavigatinLink>
      {isLoggedIn && <NavigatinLink to="/contacts">Contacts</NavigatinLink>}
    </nav>
  );
};
