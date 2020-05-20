import ImageBackground from './ImageBackground';
import { renderWithProps } from '@src/utils/test-utils';
import { fireEvent, NativeTestEvent } from '@testing-library/react-native';

const skipAction = jest.fn(() => {
  console.log('Pressed');
});

const defaultProps = {
  source: require('@src/assets/Intro/cafe.jpg'),
  testID: 'imageBackground',
};
const skipProps = { ...defaultProps, toSkip: true, skipAction };

describe('ImageBackground', () => {
  it('renders properly', () => {
    const { getByTestId, baseElement } = renderWithProps(
      ImageBackground,
      defaultProps,
    );
    expect(getByTestId(defaultProps.testID)).toBeDefined();
    expect(getByTestId(defaultProps.testID)).toHaveProp(
      'source',
      defaultProps.source,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('renders without Skip header', () => {
    const { queryByText, getByTestId, baseElement } = renderWithProps(
      ImageBackground,
      defaultProps,
    );
    expect(getByTestId(defaultProps.testID)).toBeDefined();
    expect(queryByText('Skip')).toBeNull();
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with Skip Header', () => {
    const { queryByText, getByTestId, baseElement } = renderWithProps(
      ImageBackground,
      skipProps,
    );
    expect(getByTestId(defaultProps.testID)).toBeDefined();
    expect(queryByText('Skip')).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });

  it('correctly passes skip action', () => {
    const { getByTestId, getByText, baseElement } = renderWithProps(
      ImageBackground,
      skipProps,
    );
    expect(getByTestId(skipProps.testID)).toBeDefined();
    const skipBtn = getByText('Skip');
    expect(skipBtn).toBeDefined();
    fireEvent(skipBtn, new NativeTestEvent('press'));
    expect(skipProps.skipAction).toHaveBeenCalled();
    expect(baseElement).toMatchSnapshot();
  });
});
