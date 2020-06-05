import { ThemeProvider } from 'styled-components/native';
import React, { ReactElement } from 'react';
import { render as baseRender } from '@testing-library/react-native';
import theme from '@src/stores/theme';

export const renderWithProps = (
  Component: React.ElementType,
  props: Object,
) => {
  return baseRender(
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>,
  );
};
