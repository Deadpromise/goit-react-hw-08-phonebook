import { AppHeader } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const AppBar = () => {
  const isLoggedIn = false;
  return (
    <AppHeader>
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppHeader>
  );
};
