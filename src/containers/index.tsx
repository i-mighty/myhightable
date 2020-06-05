import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector } from 'react-redux';
import React from 'react';
import colorOpacity from '@src/utils/color-opacity';
import theme from '@src/stores/theme';
import { Root } from 'native-base';
import SplashAuthContainer from './SplashAuthNavigator';

const AppRoot: React.FC = () => {
  const { loading } = useSelector((state) => state.appNotification);
  return (
    <>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        overlayColor={colorOpacity(theme.vars.black, 0.5)}
        textStyle={{ color: theme.vars.white }}
      />
      <Root>
        <SplashAuthContainer />
      </Root>
    </>
  );
};

export default AppRoot;
