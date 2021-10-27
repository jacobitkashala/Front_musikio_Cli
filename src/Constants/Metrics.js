import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const Metrics = {
  // global sizes

  width: width,
  height: height,
  // raduisMed: '50%',
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,
  large: 40,
  big: 32,
  small: 24,

  s5: 5,
  s8: 8,
  s10: 10,
  s16: 16,
  s20: 20,
  s24: 24,
  s25: 25,
  s30: 30,
  s35: 35,
  s40: 40,
  s45: 45,
  s50: 50,
  s55: 55,
  s60: 60,
  s65: 65,
  s70: 70,
  s75: 75,
  s80: 80,
  s85: 85,
  s90: 90,
  s95: 95,
  s100: 100,

  // font sizes
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 13,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 13,
  body6: 12,

  borderWidth: 0.4,

  horizontalLineHeight: 1,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  drawerWidth: (4 / 5) * width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,

  buttonRadius: 4,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    xl: 150,
    logo: 200,
  },
};

export default Metrics;
