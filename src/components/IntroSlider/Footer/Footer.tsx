import React from 'react';
import styled from 'styled-components/native';
import { Footer as NBFooter, View } from 'native-base';
import colorOpacity from '@src/utils/color-opacity';

interface ProgressStepProps {
  position: number;
  testID?: string;
}

interface FooterProps {
  currentSlide: number;
  testID?: string;
  stepTestID?: string;
}

const StyledFooter = styled(NBFooter)`
  top: -50px;
  margin-bottom: -60px;
  background-color: transparent;
  elevation: 0;
`;

const ProgressStepper = styled(View)`
  width: 200px;
  height: 4px;
  background-color: ${({ theme }) => colorOpacity(theme.vars.orange, 0.24)};
`;

const ProgressStep = styled(View)<ProgressStepProps>`
  width: 20%;
  height: 0px;
  border: 2px solid ${({ theme }) => theme.vars.orange};
  position: relative;
  left: ${({ position }) => `${position ? position * 20 : '0'}%`};
`;

const Footer: React.FC<FooterProps> = ({
  currentSlide,
  testID,
  stepTestID,
}) => {
  return (
    <StyledFooter>
      <ProgressStepper testID={testID}>
        <ProgressStep position={currentSlide} testID={stepTestID} />
      </ProgressStepper>
    </StyledFooter>
  );
};

export default Footer;
