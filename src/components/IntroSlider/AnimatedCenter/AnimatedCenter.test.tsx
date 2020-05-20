import AnimatedCenter from './AnimatedCenter';
import { renderWithProps } from '@src/utils/test-utils';

const defaultProps = {};
const animatedProps = { testID: 'animatedCenter', animation: 'fadeIn' };

describe('AnimatedCenter', () => {
  it('renders properly', () => {
    const { baseElement } = renderWithProps(AnimatedCenter, defaultProps);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders properly with animation', () => {
    const { getByTestId, baseElement } = renderWithProps(
      AnimatedCenter,
      animatedProps,
    );
    const container = getByTestId(animatedProps.testID);
    expect(container.getProp('animation')).toBe(animatedProps.animation);
    expect(baseElement).toMatchSnapshot();
  });
});
