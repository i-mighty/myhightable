import Header from './Header';
import { renderWithProps } from '@src/utils/test-utils';
import { fireEvent, NativeTestEvent } from '@testing-library/react-native';

const onButtonClick = jest.fn(() => {
  console.log('Pressed');
});

const defaultProps = { testID: 'header' };

describe('Header', () => {
  it('renders properly ', () => {
    const { getByTestId, baseElement } = renderWithProps(Header, defaultProps);
    expect(getByTestId(defaultProps.testID)).toBeDefined();
    expect(getByTestId('banner')).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});
