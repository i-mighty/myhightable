/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import IntroContainer from '@src/containers/AppIntro/Container';
import { StyleProvider } from 'native-base';
import getTheme from '@src/native-base-theme/components';
import platform from '@src/native-base-theme/variables/platform';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/stores/theme';

const App: React.FC = () => (
  <StyleProvider style={getTheme(platform)}>
    <ThemeProvider theme={theme}>
      <IntroContainer />
    </ThemeProvider>
  </StyleProvider>
);

export default App;
