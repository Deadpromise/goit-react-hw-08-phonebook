import { AppHeader } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppHeader>
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppHeader>
  );
};
