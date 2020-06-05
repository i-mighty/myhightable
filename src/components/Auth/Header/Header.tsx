import React from 'react';
import styled from 'styled-components/native';
import { Header as NBHeader, Text, Left, Body } from 'native-base';
import colorOpacity from '@src/utils/color-opacity';
import Banner from '@src/assets/highTableLogo.svg';

interface HeaderProps {
  testID?: string;
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

const Header: React.FC<HeaderProps> = ({ testID }) => {
  return (
    <StyledHeader testID={testID} transparent noLeft>
      <Body>
        <Banner width={149} height={38} testID="banner" />
      </Body>
    </StyledHeader>
  );
};

export default Header;
