import styled from 'styled-components/native';
import {
  ImageBackground as RNImageBackground,
  ImageSourcePropType,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colorOpacity from '@src/utils/color-opacity';
import { FC } from 'react';
import { Content } from 'native-base';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ActionDescription from '../ActionDescription/ActionDescription';

const StyledImageBackground = styled(RNImageBackground)`
  height: 100%;
  width: 100%;
`;

const StyledContent = styled(Content)`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => colorOpacity(theme.vars.dark, 0.5)};
`;

interface Props {
  source: ImageSourcePropType;
  animation?: Animatable.Animation;
  authState?: string;
  testID?: string;
}

const AnimatedImageBackground = Animatable.createAnimatableComponent(
  StyledImageBackground,
);

const ImageBackground: FC<Props> = ({
  source,
  children,
  animation,
  testID,
}) => {
  return (
    <AnimatedImageBackground
      source={source}
      animation={animation || 'fadeIn'}
      testID={testID}>
      <Header />
      <StyledContent
        contentContainerStyle={{
          flex: 1,
        }}>
        {children}
      </StyledContent>
    </AnimatedImageBackground>
  );
};

export default ImageBackground;
