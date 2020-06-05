import React, { useState } from 'react';
import IntroContainer from './AppIntro/Container';
import AuthContainer from './Auth/Container';
import { AuthOptions } from '@src/stores/auth/types';

const SplashAuthContainer: React.FC = () => {
  const [splash, setSplash] = useState<boolean>(true);
  const [authOption, setAuthOption] = useState<AuthOptions>('register');
  const continueToAuth = (newAuthOption?: AuthOptions) => {
    newAuthOption && setAuthOption(newAuthOption);
    setSplash(false);
  };
  return (
    <>
      {splash ? (
        <IntroContainer continueToAuth={continueToAuth} />
      ) : (
        <AuthContainer authOption={authOption} />
      )}
    </>
  );
};

export default SplashAuthContainer;
