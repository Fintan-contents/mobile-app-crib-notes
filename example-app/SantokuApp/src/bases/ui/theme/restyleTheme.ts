import {createTheme} from '@shopify/restyle';

const palette = {
  orange1: '#FF9800',
  orange2: '#FFF5E4',
  blue: '#29B6F6',
  black: '#212121',
  grey1: '#9E9E9E',
  grey2: '#E0E0E0',
  grey3: '#F5F5F5',
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
    grey1: palette.grey1,
    grey2: palette.grey2,
    grey3: palette.grey3,
    white: palette.white,
    divider: palette.divider,
    textRed: palette.textRed,
  },
  spacing: {
    s: 8,
    p2: 2,
    p4: 4,
    p8: 8,
    p16: 16,
    p24: 24,
    p32: 32,
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
    p24: {
      width: 24,
      height: 24,
    },
    p40: {
      width: 40,
      height: 40,
    },
    p120: {
      width: 120,
      height: 120,
    },
  },
  textVariants: {
    defaults: {
      // fontFamily: 'ShopifySans-Bold',
      // fontSize: 16,
      // lineHeight: 24,
      // color: 'black',
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
    font14Regular: {
      fontSize: 14,
    },
    font14SemiBold: {
      fontSize: 14,
      fontWeight: '600',
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
});

export type RestyleTheme = typeof restyleTheme;
