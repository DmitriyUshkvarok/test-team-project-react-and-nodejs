import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelector from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const isRefreshing = useSelector(authSelector.getIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
