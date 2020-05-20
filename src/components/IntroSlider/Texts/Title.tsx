import React from 'react';
import styled from 'styled-components/native';

export interface TitleProps {
  color?: string;
  text: string;
  testID?: string;
}

const StyledTitle = styled.Text<Pick<TitleProps, 'color'>>`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${({ color, theme }) => (color ? color : theme.vars.orange)};
  margin-bottom: 5px;
`;

const Title: React.FC<TitleProps> = ({ text, testID, color }) => {
  return (
    <StyledTitle color={color} testID={testID}>
      {text}
    </StyledTitle>
  );
};

export default Title;
