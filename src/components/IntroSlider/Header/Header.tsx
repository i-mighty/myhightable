import React from 'react';
import styled from 'styled-components/native';
import { Header as NBHeader, Button, Right, Text } from 'native-base';
import colorOpacity from '@src/utils/color-opacity';

interface HeaderProps {
  buttonText?: string;
  onButtonClick?: () => void;
  testID?: string;
  buttonTestID?: string;
}

const StyledHeader = styled(NBHeader)<HeaderProps>`
  background-color: ${({ theme }) => colorOpacity(theme.vars.dark, 0.5)};
  width: 100%;
`;

const ButtonText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => colorOpacity(theme.vars.white, 0.5)};
`;

const Header: React.FC<HeaderProps> = ({
  buttonText,
  onButtonClick,
  testID,
  buttonTestID,
}) => {
  return buttonText ? (
    <StyledHeader testID={testID} transparent>
      <Right>
        <Button testID={buttonTestID} transparent onPress={onButtonClick}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </Right>
    </StyledHeader>
  ) : (
    <StyledHeader testID={testID} transparent />
  );
};

export default Header;
