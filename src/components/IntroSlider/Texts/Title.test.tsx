import Title from './Title';
import theme from '@src/stores/theme';
import { renderWithProps } from '@src/utils/test-utils';

const defaultProps = { testID: 'title', text: 'HighTable' };
const colouredProps = { ...defaultProps, color: theme.vars.white };

describe('Title', () => {
  it('renders successfully', () => {
    const { getByTestId, baseElement } = renderWithProps(Title, defaultProps);
    const textComponent = getByTestId(defaultProps.testID);
    expect(textComponent).toHaveStyleRule('color', theme.vars.orange);
    expect(getByTestId(defaultProps.testID).props.children).toEqual(
      defaultProps.text,
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('renders with the right color', () => {
    const { getByTestId, baseElement } = renderWithProps(Title, colouredProps);
    const textComponent = getByTestId(colouredProps.testID);
    expect(textComponent.props.children).toEqual(colouredProps.text);
    expect(textComponent).toHaveStyleRule('color', colouredProps.color);
    expect(baseElement).toMatchSnapshot();
  });
});
