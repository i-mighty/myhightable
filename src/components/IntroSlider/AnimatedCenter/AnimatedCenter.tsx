import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const AnimatedCenter = styled(Animatable.View)`
  margin-top: -70px;
  height: 100%;
  width: 100%;
  max-width: 360px;
  justify-content: center;
  align-items: center;
`;
export default AnimatedCenter;
