import { useState, useEffect } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const useDarkMode = (defaultValue?: boolean) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const setDarkMode = (value: boolean) => {
    localStorage.setItem('theme', value ? 'dark' : 'light');
    setIsDarkMode(value);
  };

  const toggleDarkMode = () => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  const getDarkModeStorage = () => {
    const value = localStorage.getItem('theme');
    if (value === 'dark') return true;
    if (value === 'light') return false;
    return null;
  };

  useEffect(() => {
    const darkModeStorage = getDarkModeStorage();
    const darkModeBrowserSetting =
      window.matchMedia(COLOR_SCHEME_QUERY).matches;
    setDarkMode(
      darkModeStorage ?? defaultValue ?? darkModeBrowserSetting ?? false
    );
  }, [defaultValue]);

  return {
    isDarkMode,
    toggleDarkMode,
    disableDarkMode: () => setDarkMode(false),
    enableDarkMode: () => setDarkMode(true),
  };
};

export default useDarkMode;
