import { toast } from 'react-toastify';

const handleAuthError = (errorMessage) => {
  let errorText = 'An error occurred';

  switch (errorMessage) {
    case 'Email or password is wrong':
      errorText = 'Email or password is wrong';
      break;
    // Другие возможные ошибки
    default:
      errorText = 'An error occurred';
  }

  toast.error(errorText);
};

export default handleAuthError;
