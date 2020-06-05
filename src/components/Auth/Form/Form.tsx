import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { View, Row, Button, Text } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Title from '@src/components/Auth/Texts/Title';
import Description from '@src/components/Auth/Texts/Description';
import ActionDescription, {
  ActionDescriptionProps,
} from './../ActionDescription/ActionDescription';
import Facebook from '@src/assets/Auth/facebook.svg';
import Instagram from '@src/assets/Auth/instagram.svg';
import Google from '@src/assets/Auth/google.svg';
import SocialIcon from '../SocialIcon/SocialIcon';
import Input, { InputProps } from './../Input/Input';
import Footer from '@src/components/Auth/Footer/Footer';
import { cleanup } from '@testing-library/react-native';

export interface FormProps {
  fields: InputProps[];
  testID?: string;
  title: string;
  description?: string;
  formButtonAction: () => void;
  formButtonText: string;
  withSocialAuth?: boolean;
  socialAuthAction?: 'register' | 'login';
  actionDescription?: ActionDescriptionProps;
  footer?: ActionDescriptionProps;
}

const ActionButton = styled(Button)`
  margin-top: 32px;
  margin-bottom: 15px;
`;

const SocialAuthView = styled(View)`
  margin-top: 15px;
  height: 70px;
  margin-bottom: 10px;
`;

const StyledView = styled(Animatable.View)`
  background-color: ${({ theme }) => theme.vars.white};
  width: 100%;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Form: React.FC<FormProps> = ({
  testID,
  title,
  description,
  fields,
  formButtonAction,
  formButtonText,
  actionDescription,
  withSocialAuth,
  socialAuthAction,
  footer,
}) => {
  const ref = useRef(null);

  return (
    <StyledView ref={ref} testID={testID} animation={'fadeIn'}>
      <Title text={title} />
      <Description text={description || ''} />
      {fields.map((field) => {
        return <Input {...field} />;
      })}
      <ActionButton block onPress={formButtonAction}>
        <Text>{formButtonText}</Text>
      </ActionButton>
      {actionDescription && <ActionDescription {...actionDescription} />}
      {withSocialAuth && (
        <SocialAuthView>
          <Description
            text={
              socialAuthAction === 'login'
                ? 'or Sign in with'
                : 'or Sign up with'
            }
            fontSize={14}
          />
          <Row style={{ justifyContent: 'center', marginTop: 20 }}>
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Google} />
          </Row>
        </SocialAuthView>
      )}
      {footer ? (
        <Footer>
          <ActionDescription {...footer} />
        </Footer>
      ) : null}
    </StyledView>
  );
};

export default Form;
