import { Suspense, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperation from '../../redux/auth/authOperation';
// import SharedLayout from '../SharedLayout/SharedLayout';
import Container from '../Container/Container';
import NoticesCategoriesList from '../Notices/NoticesCategoriesList/NoticesCategoriesList';
import Header from '../Header/Header';

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

  useEffect(() => {
    dispatch(authOperation.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading subpage ....</div>}>
        <Container>
          <Header />
          <Routes>
            {/* <Route path="/" element={<SharedLayout />}> */}
            <Route path="/" element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="user" element={<ProfilePage />} />
            <Route path="*" element={<HomePage />} />
            {/* </Route> */}
            <Route path="confirm-page" element={<ConfirmEmailPage />} />
          </Routes>
        </Container>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
