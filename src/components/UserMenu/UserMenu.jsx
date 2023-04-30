import { useSelector, useDispatch } from 'react-redux';
import { UserMenuContainer, UserInfo } from './UserMenu.styled';
import { getUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { CommonButton } from 'components/common/CommonButton.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <UserMenuContainer>
      <UserInfo>{user.email}</UserInfo>

      <CommonButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </CommonButton>
    </UserMenuContainer>
  );
};
