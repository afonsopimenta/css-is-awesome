'use client';

import clsx from 'clsx';
import useDarkMode from '@/hooks/useDarkMode';

import '@/styles/globals.css';

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <html lang='en'>
      <head />
      <body className={clsx(isDarkMode && 'dark')}>
        <button onClick={toggleDarkMode} className='fixed top-4 right-4'>
          Switch to {isDarkMode ? 'light' : 'dark'} mode
        </button>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
