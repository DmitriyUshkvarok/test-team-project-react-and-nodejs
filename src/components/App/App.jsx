import { Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from '../../redux/auth/authSelectors';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperation from '../../redux/auth/authOperation';
import SharedLayout from '../SharedLayout/SharedLayout';
import Container from '../Container/Container';
import PrivateRoute from '../PrivateRoute';
import RestictedRoute from '../RestictedRoute';
import MainLoader from '../MainLoader/MainLoader';
import LoaderMini from '../LoaderMini/LoaderMini';
import { LoaderContainer } from './App.styled';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../../pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));

const ConfirmEmailPage = lazy(() =>
  import('../../pages/ConfirmEmailPage/ConfirmEmailPage')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperation.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <LoaderContainer>
          <LoaderMini />
        </LoaderContainer>
      ) : (
        <Suspense fallback={<MainLoader />}>
          <Container>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="notices" element={<NoticesPage />} />
                <Route path="friends" element={<OurFriendsPage />} />
                <Route
                  path="register"
                  element={
                    <RestictedRoute
                      redirectTo="/"
                      component={<RegisterPage />}
                    />
                  }
                />
                <Route
                  path="login"
                  element={
                    <RestictedRoute redirectTo="/" component={<LoginPage />} />
                  }
                />
                <Route
                  path="user"
                  element={
                    <PrivateRoute
                      redirectTo="/user"
                      component={<ProfilePage />}
                    />
                  }
                ></Route>
                <Route path="*" element={<HomePage />} />
              </Route>
              <Route path="confirm-page" element={<ConfirmEmailPage />} />
            </Routes>
          </Container>
        </Suspense>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
