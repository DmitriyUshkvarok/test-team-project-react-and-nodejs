import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import HomePage from '../../pages/HomePage/HomePage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import OurFriendsPage from '../../pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import Container from '../Container/Container';
import NoticesCategoriesList from '../Notices/NoticesCategoriesList/NoticesCategoriesList';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading subpage ....</div>}>
        <Container>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
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
            </Route>
          </Routes>
        </Container>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
