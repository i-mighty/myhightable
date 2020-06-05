import styled from 'styled-components/native';
import React from 'react';

interface DescriptionProps {
  color?: string;
  text: string;
  testID?: string;
  fontSize?: number;
}

const StyledDescription = styled.Text<
  Pick<DescriptionProps, 'color' | 'fontSize'>
>`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  line-height: 21px;
  text-align: center;
  color: ${({ color, theme }) => color || theme.vars.slate_grey};
`;

const Description: React.FC<DescriptionProps> = ({
  text,
  testID,
  color,
  fontSize,
}) => {
  return (
    <StyledDescription color={color} testID={testID} fontSize={fontSize}>
      {text}
    </StyledDescription>
  );
};

export default Description;
