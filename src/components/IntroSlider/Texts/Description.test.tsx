import Description from './Description';
import theme from '@src/stores/theme';
import { renderWithProps } from '@src/utils/test-utils';

const defaultProps = { testID: 'title', text: 'HighTable' };
const colouredProps = { ...defaultProps, color: theme.vars.orange };

describe('Description', () => {
  it('renders successfully', () => {
    const { getByTestId, baseElement } = renderWithProps(
      Description,
      defaultProps,
    );
    expect(getByTestId(defaultProps.testID).props.children).toEqual(
      defaultProps.text,
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('renders with the right color', () => {
    const { getByTestId, baseElement } = renderWithProps(
      Description,
      colouredProps,
    );
    const textComponent = getByTestId(colouredProps.testID);
    expect(textComponent.props.children).toEqual(colouredProps.text);
    expect(textComponent).toHaveStyleRule('color', colouredProps.color);
    expect(baseElement).toMatchSnapshot();
  });
});
