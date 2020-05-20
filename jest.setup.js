import React from 'react';
import { TouchableHighlight } from 'react-native';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const MockTouchable = (props) => <TouchableHighlight {...props} />;
    MockTouchable.displayName = 'TouchableOpacity';

    return MockTouchable;
  },
);
