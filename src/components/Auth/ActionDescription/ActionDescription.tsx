import styled from 'styled-components';
import { View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Description from '@src/components/Auth/Texts/Description';
import theme from '@src/stores/theme';
import React from 'react';

export interface ActionDescriptionProps {
  description?: string;
  actionText: string;
  action: () => void;
}

const AltView = styled(View)<{ description?: string }>`
  flex-direction: row;
  justify-content: ${({ description }) =>
    description ? `center` : `flex-start`};
  align-items: center;
`;

const SignInButton = styled(TouchableOpacity)`
  padding-left: 2px;
  margin: 0px;
`;

const ActionDescription: React.FC<ActionDescriptionProps> = ({
  description,
  action,
  actionText,
}) => {
  return (
    <AltView description={description}>
      {description && (
        <Description text={description} testID="plainText" fontSize={13} />
      )}
      <SignInButton onPress={action}>
        <Description
          color={theme.vars.orange}
          text={actionText}
          testID="buttonText"
          fontSize={13}
        />
      </SignInButton>
    </AltView>
  );
};

export default ActionDescription;
