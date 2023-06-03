import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from '../MainForm/FormRegistration/FormRegistaration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import HomePage from '../../pages/HomePage/HomePage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import OurFriendsPage from '../../pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import Logo from '../Logo/Logo';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading subpage ....</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="user" element={<ProfilePage />} />
            <Route path="*" element={<Logo />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
      <RegistrationForm />
    </>
  );
}

export default App;
