import React, { FC } from 'react';
import ImageBackground from '@src/components/IntroSlider/ImageBackground/ImageBackground';
import AnimatedCenter from '@src/components/IntroSlider/AnimatedCenter/AnimatedCenter';
import Title from '@src/components/IntroSlider/Texts/Title';
import Description from '@src/components/IntroSlider/Texts/Description';
import Banner from '@src/assets/highTableLogo.svg';
import { Button, Text, View } from 'native-base';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from '@src/stores/theme';

export interface PageProp {
  caption?: string;
  description?: string;
  background: ImageSourcePropType;
  withAuth?: boolean;
  isBanner?: boolean;
  skipAction?: () => void;
  authProceedAction?: () => void;
  containerTestID?: string;
  testID?: string;
}

const AuthView = styled(View)`
  margin-top: 50px;
  width: 100%;
`;

const AltView = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SignInButton = styled(TouchableOpacity)`
  padding-left: 2px;
  margin: 0px;
`;

const DetailsPage: FC<PageProp> = ({
  caption,
  description,
  background,
  withAuth,
  isBanner,
  skipAction,
  authProceedAction,
  containerTestID,
  testID,
}) => {
  const authProceed = () => {
    if (authProceedAction) {
      authProceedAction();
    }
  };
  return (
    <ImageBackground
      animation={'fadeIn'}
      source={background}
      toSkip={!isBanner && !withAuth}
      skipAction={skipAction}
      testID={testID}>
      {isBanner ? (
        <AnimatedCenter animation={'fadeInUp'} testID={containerTestID}>
          <Banner width={248} height={233} testID="banner" />
        </AnimatedCenter>
      ) : (
        <>
          <AnimatedCenter testID={containerTestID}>
            {caption && <Title text={caption} />}
            {description && <Description text={description} />}
            {withAuth && (
              <AuthView>
                <Button block onPress={authProceed}>
                  <Text>Get Started</Text>
                </Button>
                <AltView>
                  <Description text={'Already have an account?'} />
                  <SignInButton onPress={authProceed}>
                    <Description color={theme.vars.orange} text={'Sign In'} />
                  </SignInButton>
                </AltView>
              </AuthView>
            )}
          </AnimatedCenter>
        </>
      )}
    </ImageBackground>
  );
};

export default DetailsPage;
