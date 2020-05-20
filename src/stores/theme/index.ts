interface Theme {
  vars: {
    [key: string]: string;
  };
  dimens?: {
    [key: string]: string;
  };
}

const theme: Theme = {
  vars: {
    orange: '#F89505',
    dark: '#000000',
    black: '#333333',
    black_alt: '#4F4F4F',
    slate_grey: '#828282',
    grey: '#BDBDBD',
    grey_alt: '#C4C4C4',
    white: '#FFFFFF',
    white_alt: '#F2F2F2',
  },
};

export default theme;
