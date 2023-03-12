import { useSelector } from 'react-redux';
import {
  selectAccessToken,
  selectEmail,
  selectIsLoggedIn,
  selectName,
} from 'redux/authSlice/authSelectors';

export const useAuth = () => {
  const accessToken = useSelector(selectAccessToken);
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    accessToken,
    email,
    name,
    isLoggedIn,
  };
};
