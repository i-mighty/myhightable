import Footer from './Footer';
import { renderWithProps } from '@src/utils/test-utils';

const defaultProps = {
  currentSlide: 0,
  testID: 'progress',
  stepTestID: 'step',
};
const updatedSlideProps = { ...defaultProps, currentSlide: 1 };
describe('Footer', () => {
  it('renders successfully', () => {
    const { getByTestId, baseElement } = renderWithProps(Footer, defaultProps);
    const progressBar = getByTestId(defaultProps.testID);
    const progressStep = getByTestId(defaultProps.stepTestID);
    expect(progressBar).toBeDefined();
    expect(progressStep).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
  it('moves the step with the count ', () => {
    const { getByTestId, baseElement } = renderWithProps(
      Footer,
      updatedSlideProps,
    );
    const progressStep = getByTestId(updatedSlideProps.stepTestID);
    expect(progressStep).toHaveStyleRule(
      'left',
      `${updatedSlideProps.currentSlide * 20}%`,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
