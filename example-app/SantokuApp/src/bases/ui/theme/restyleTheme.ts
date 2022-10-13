import {createTheme} from '@shopify/restyle';

const palette = {
  orange1: '#FF9800',
  orange2: '#FFF5E4',
  blue: '#29B6F6',
  black: '#212121',
  black2: '#000000',
  grey1: '#9E9E9E',
  grey2: '#E0E0E0',
  grey3: '#F5F5F5',
  grey4: '#CCCCCC',
  white: '#FFFFFF',
  divider: '#CBCBCB',
  textRed: '#FF4857',
};

export const restyleTheme = createTheme({
  colors: {
    orange1: palette.orange1,
    orange2: palette.orange2,
    blue: palette.blue,
    black: palette.black,
    black2: palette.black2,
    grey1: palette.grey1,
    grey2: palette.grey2,
    grey3: palette.grey3,
    white: palette.white,
    divider: palette.divider,
    textRed: palette.textRed,
    placeholder: palette.grey4,
    errorText: palette.textRed,
    activityIndicator: palette.grey2,
  },
  spacing: {
    s: 8,
    p2: 2,
    p4: 4,
    p8: 8,
    p12: 12,
    p16: 16,
    p24: 24,
    p32: 32,
    p48: 48,
    p64: 64,
  },
  breakpoints: {
    // phone: 0,
    // tablet: 768,
  },
  sizeVariants: {
    defaults: {
      width: 8,
      height: 8,
    },
    p18: {
      width: 18,
      height: 18,
    },
    p24: {
      width: 24,
      height: 24,
    },
    p40: {
      width: 40,
      height: 40,
    },
    p48: {
      width: 48,
      height: 48,
    },
    p120: {
      width: 120,
      height: 120,
    },
  },
  zIndices: {},
  borderRadii: {
    s: 8,
    p2: 2,
    p4: 4,
    p8: 8,
    p16: 16,
    p20: 20,
    p24: 24,
    p28: 28,
    p32: 32,
    p40: 40,
    p56: 56,
  },
  textVariants: {
    defaults: {
      color: 'black',
    },
    font20Bold: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    font22Bold: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    font18SemiBold: {
      fontSize: 18,
      fontWeight: '600',
    },
    font16Regular: {
      fontSize: 16,
    },
    font14Regular: {
      fontSize: 14,
    },
    font14SemiBold: {
      fontSize: 14,
      fontWeight: '600',
    },
    font14Bold: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    font13Regular: {
      fontSize: 13,
      fontWeight: '400',
    },
    font13Bold: {
      fontSize: 13,
      fontWeight: '600',
    },
    button: {
      fontSize: 14,
      fontWeight: '600',
      color: 'white',
    },
    inputErrorText: {
      fontSize: 14,
      color: 'errorText',
    },
    h1: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
    },
    h2: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
    },
    h3: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
    },
    h4: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
    },
    h5: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
    },
    h6: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: 'blue',
      borderRadius: 'p16',
      px: 'p12',
      py: 'p8',
    },
    tag: {},
  },
});

export type RestyleTheme = typeof restyleTheme;
