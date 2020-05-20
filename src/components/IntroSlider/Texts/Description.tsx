import styled from 'styled-components/native';
import React from 'react';

interface DescriptionProps {
  color?: string;
  text: string;
  testID?: string;
}

const StyledDescription = styled.Text<Pick<DescriptionProps, 'color'>>`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${({ color, theme }) => color || theme.vars.white};
  margin-top: 10px;
`;

const Description: React.FC<DescriptionProps> = ({ text, testID, color }) => {
  return (
    <StyledDescription color={color} testID={testID}>
      {text}
    </StyledDescription>
  );
};

export default Description;
