import Header from './Header';
import { renderWithProps } from '@src/utils/test-utils';
import { fireEvent, NativeTestEvent } from '@testing-library/react-native';

const onButtonClick = jest.fn(() => {
  console.log('Pressed');
});

const defaultProps = { testID: 'header', buttonTestID: 'button' };
const buttonTextProps = { ...defaultProps, buttonText: 'Skip' };
const buttonClickProps = { ...buttonTextProps, onButtonClick };

describe('Header', () => {
  it('renders properly without button', () => {
    const { getByTestId, baseElement, queryByTestId } = renderWithProps(
      Header,
      defaultProps,
    );
    expect(getByTestId(defaultProps.testID)).toBeDefined();
    expect(queryByTestId(defaultProps.buttonTestID)).toBeNull();
    expect(baseElement).toMatchSnapshot();
  });

  it('renders properly with button', () => {
    const { getByTestId, getByText, baseElement } = renderWithProps(
      Header,
      buttonTextProps,
    );
    const header = getByTestId(buttonTextProps.testID);
    const button = getByTestId(buttonTextProps.buttonTestID);
    const buttonText = getByText(buttonTextProps.buttonText);
    expect(header).toBeDefined();
    expect(button).toBeDefined();
    expect(buttonText).toBeDefined();
    expect(buttonText.props.children).toBe(buttonTextProps.buttonText);
    expect(baseElement).toMatchSnapshot();
  });

  it('handles button click event', async () => {
    const { getByTestId, getByText, baseElement } = renderWithProps(
      Header,
      buttonClickProps,
    );
    const header = getByTestId(buttonClickProps.testID);
    const button = getByTestId(buttonClickProps.buttonTestID);
    const buttonText = getByText(buttonClickProps.buttonText);
    expect(header).toBeDefined();
    expect(button).toBeDefined();
    expect(buttonText).toBeDefined();
    expect(buttonText.props.children).toBe(buttonClickProps.buttonText);
    fireEvent(button, new NativeTestEvent('press'));
    expect(buttonClickProps.onButtonClick).toHaveBeenCalled();
    expect(baseElement).toMatchSnapshot();
  });
});
