import ImageBackground from './ImageBackground';
import { renderWithProps } from '@src/utils/test-utils';

const defaultProps = {
  source: require('@src/assets/Intro/cafe.jpg'),
  testID: 'imageBackground',
};

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

  it('renders with Banner Header', () => {
    const { getByTestId, baseElement } = renderWithProps(
      ImageBackground,
      defaultProps,
    );
    expect(getByTestId(defaultProps.testID)).toBeDefined();
    expect(getByTestId('banner')).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});
