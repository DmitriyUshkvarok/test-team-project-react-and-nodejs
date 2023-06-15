import { useSelector, useDispatch } from 'react-redux';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { useEffect } from 'react';
import { BtnSwitcher, SwitcherWrapper } from './ToggleTheme.styled';

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <SwitcherWrapper>
      <BtnSwitcher onClick={handleThemeToggle}>
        {isDarkMode ? (
          <BsFillMoonStarsFill size={16} />
        ) : (
          <BsFillSunFill size={16} />
        )}
      </BtnSwitcher>
    </SwitcherWrapper>
  );
};

export default ToggleTheme;
