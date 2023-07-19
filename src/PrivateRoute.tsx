import { useAppDispatch } from './store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsAuthenticated,
  setIsGlobalLoading,
} from './store/slice/authen/slice';

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!currentUser) {
      dispatch(setIsGlobalLoading(true));
      // requestGoogleLogin();

      // const handleRedirect = async () => {
      //   const data: any = await getRedirectResult(auth);

      //   console.log(data)
      //   dispatch(setIsGlobalLoading(false));
      //   if (data) {
      //     localStorage.setItem('user', JSON.stringify(data.user));
      //     dispatch(setAuthRedirectResult(data._tokenResponse));
      //     return;
      //   }
      //   dispatch(signInGoogle());
      // };
      // handleRedirect();
    }
  }, [currentUser, dispatch]);

  if (!isAuthenticated) return null;

  return <Component />;
};
