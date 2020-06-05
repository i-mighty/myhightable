import React from 'react';
import styled from 'styled-components/native';
import { Content } from 'native-base';
import * as Animatable from 'react-native-animatable';

interface BottomContentProps {
  testID?: string;
  animation?: Animatable.Animation;
}

const StyledContent = styled(Animatable.View)<BottomContentProps>`
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 100%;
`;

StyledContent.defaultProps = {
  style: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
};

const BottomContent: React.FC<BottomContentProps> = ({
  testID,
  children,
  animation,
}) => {
  return (
    <StyledContent animation={animation} testID={testID}>
      {children}
    </StyledContent>
  );
};

export default BottomContent;
