import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  Item,
  Icon,
  Label,
  Input as NBInput,
  Row,
  Col,
  View,
} from 'native-base';
import theme from '@src/stores/theme';
import Description from '@src/components/Auth/Texts/Description';
import { useSelector } from '@src/stores';

export interface InputProps {
  icon?: string;
  name: string;
  value: string;
  placeholder: string;
  password?: boolean;
  testID?: string;
  updateField: (name: string, value: string) => void;
  error?: string;
  formName?: string;
}

Icon.defaultProps = {
  style: {
    color: theme.vars.slate_grey,
  },
};

const StyledItem = styled(Item)<{ isFocused?: boolean; withIcon?: boolean }>`
  border-bottom-width: 0px;
  width: 100%;
  ${({ withIcon }) => withIcon && `padding-left: 10px`};
`;

const InputContainer = styled(Row)<{ isFocused?: boolean }>`
  width: 100%;
  height: 60px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.vars.orange : theme.vars.grey_alt};
  border-bottom-width: 2px;
  align-items: flex-end;
`;

const IconCol = styled(Col)`
  width: 30px;
`;

const Input: React.FC<InputProps> = ({
  value,
  password,
  icon,
  placeholder,
  testID,
  name,
  updateField,
  error,
  formName,
}) => {
  const [showText, setShowText] = useState<boolean>(!password);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const showSecret = () => {
    if (!showText) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };

  const onChangeText = (value: string) => {
    updateField(name, value);
  };

  return (
    <View>
      <InputContainer isFocused={isFocused}>
        {icon && (
          <IconCol>
            <Icon testID="leftIcon" type="MaterialIcons" name={icon} />
          </IconCol>
        )}
        <Col>
          <StyledItem floatingLabel isFocused={isFocused} withIcon={!!icon}>
            <Label
              style={{
                marginLeft: !!icon ? 15 : 5,
              }}>
              {placeholder}
            </Label>
            <NBInput
              value={value}
              secureTextEntry={!showText}
              onChangeText={onChangeText}
              onFocus={onFocus}
              onBlur={onBlur}
              testID={testID}
            />
          </StyledItem>
        </Col>
        {password && (
          <IconCol>
            <Icon
              testID="rightIcon"
              name={showText ? 'eye-off' : 'eye'}
              onPress={showSecret}
            />
          </IconCol>
        )}
      </InputContainer>
      {error && <Description text={error} color={theme.vars.orange} />}
    </View>
  );
};

export default Input;
