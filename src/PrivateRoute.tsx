import { useAppDispatch } from "./store";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
  setAuthRedirectResult,
  setIsGlobalLoading,
} from "./store/slice/authen/slice";
import { auth } from "./configs";
import { signInGoogle } from "./store/actions/authenApi";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    try {
      dispatch(setIsGlobalLoading(true))
      if (!currentUser) {
        const handleRedirect = async () => {
          const data: any = await getRedirectResult(auth);
          console.log(data,'ở đây nè anh tuấn');
          if (data) {
            dispatch(setAuthRedirectResult(data._tokenResponse));
            return;
          }
          dispatch(signInGoogle());
        };
        handleRedirect();
      }
    } catch (error) {
    } finally {
      dispatch(setIsGlobalLoading(false))
    }
  }, [currentUser, dispatch]);

  if (!isAuthenticated) return null;

  return <Component />;
};
