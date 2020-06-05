import React from 'react';
import styled from 'styled-components/native';
import { Footer as NBFooter, Text, Left, Body } from 'native-base';
import colorOpacity from '@src/utils/color-opacity';
import Banner from '@src/assets/highTableLogo.svg';

interface FooterProps {
  testID?: string;
}

const StyledFooter = styled(NBFooter)<FooterProps>`
  background-color: ${({ theme }) => theme.vars.white};
  width: 100%;
  margin-top: 5px;
  elevation: 0;
`;

const Footer: React.FC<FooterProps> = ({ testID, children }) => {
  return <StyledFooter testID={testID}>{children}</StyledFooter>;
};

export default Footer;
