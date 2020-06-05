import { SvgProps } from 'react-native-svg';
import { Col, Icon as NBIcon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import React from 'react';

export interface SocialIconProps {
  name?: 'facebook-o' | 'google' | 'instagram';
  Icon?: React.FC<SvgProps>;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, Icon }) => {
  return (
    <Col
      style={{
        width: 5,
        marginLeft: 50,
        marginRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity testID="iconButton">
        {Icon && <Icon width={30} height={30} testID="svgIcon" />}
        {name && <NBIcon type={'FontAwesome'} name={name} testID="fontIcon" />}
      </TouchableOpacity>
    </Col>
  );
};

export default SocialIcon;
