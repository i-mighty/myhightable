import DetailsPage from './DetailsPage';
import { renderWithProps } from '@src/utils/test-utils';
import { fireEvent, NativeTestEvent } from '@testing-library/react-native';

const defaultProps = {
  background: require('@src/assets/Intro/cafe.jpg'),
  containerTestID: 'container',
  testID: 'root',
};
const withBannerProps = { ...defaultProps, isBanner: true };
const titleProps = { ...defaultProps, caption: 'Title' };
const skipProps = { ...defaultProps, skipAction: jest.fn() };
const descProps = {
  ...defaultProps,
  description: 'Some sample description',
  rootTestID: 'center',
};
const withAuthProps = {
  ...defaultProps,
  withAuth: true,
  authProceedAction: jest.fn(() => {}),
};

describe('DetailsPage', () => {
  it('renders properly', () => {
    const { getByTestId, baseElement } = renderWithProps(
      DetailsPage,
      defaultProps,
    );
    const root = getByTestId(defaultProps.testID);
    const center = getByTestId(defaultProps.containerTestID);
    expect(root).toBeDefined();
    expect(root).toHaveProp('source', defaultProps.background);
    expect(center).toBeDefined();
    expect(center).not.toHaveProp('animation');
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with banner ', () => {
    const { getByTestId, queryByTestId, baseElement } = renderWithProps(
      DetailsPage,
      withBannerProps,
    );
    const root = getByTestId(withBannerProps.testID);
    const center = getByTestId(withBannerProps.containerTestID);
    expect(root).toBeDefined();
    expect(center).toBeDefined();
    expect(center).toHaveProp('animation');
    expect(queryByTestId('banner')).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with the right Title', () => {
    const { getByTestId, queryByText, baseElement } = renderWithProps(
      DetailsPage,
      titleProps,
    );
    const root = getByTestId(titleProps.testID);
    const center = getByTestId(titleProps.containerTestID);
    const title = queryByText(titleProps.caption);
    expect(root).toBeDefined();
    expect(center).toBeDefined();
    expect(center).not.toHaveProp('animation');
    expect(title).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with the right Description', () => {
    const { getByTestId, queryByText, baseElement } = renderWithProps(
      DetailsPage,
      descProps,
    );
    const root = getByTestId(descProps.testID);
    const center = getByTestId(descProps.containerTestID);
    const description = queryByText(descProps.description);
    expect(root).toBeDefined();
    expect(center).toBeDefined();
    expect(center).not.toHaveProp('animation');
    expect(description).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });

  it('renders AuthView properly', () => {
    const { getByTestId, getByText, baseElement } = renderWithProps(
      DetailsPage,
      withAuthProps,
    );
    const root = getByTestId(withAuthProps.testID);
    const center = getByTestId(withAuthProps.containerTestID);
    const newAuthBtn = getByText('Get Started');
    const altText = getByText('Already have an account?');
    const altBtn = getByText('Sign In');
    expect(root).toBeDefined();
    expect(center).toBeDefined();
    expect(center).toBeDefined();
    expect(center).not.toHaveProp('animation');
    expect(newAuthBtn).toBeDefined();
    expect(altText).toBeDefined();
    expect(altBtn).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });

  it('handles Auth action properly', () => {
    const { getByTestId, getByText, baseElement } = renderWithProps(
      DetailsPage,
      withAuthProps,
    );
    const root = getByTestId(withAuthProps.testID);
    const center = getByTestId(withAuthProps.containerTestID);
    expect(root).toBeDefined();
    expect(center).toBeDefined();
    const newAuthBtn = getByText('Get Started');
    const altBtn = getByText('Sign In');
    fireEvent(newAuthBtn, new NativeTestEvent('press'));
    fireEvent(altBtn, new NativeTestEvent('press'));
    expect(withAuthProps.authProceedAction).toHaveBeenCalledTimes(2);
  });
});
