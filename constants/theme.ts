import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const SIZES = {
  //Base Sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  //Font Sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  //Dimensions
  width,
  height,
};

//Dark Theme
export const dark = {
  //base Colors
  primary: 'green', // App Main Colors
  secondary: 'red', // App Secondary Colors
  //All Colors
  text: '#fff',
  background: '#000',
};
//Light Theme
export const light = {
  //base Colors
  primary: 'green', // App Main Colors
  secondary: 'red', // App Secondary Colors
  //All Colors
  text: '#000',
  background: '#fff',
};

const COLORS = {};

const FONTS = {
  largeTitle: {fontFamily: 'Robot-Bold', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Robot-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Robot-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Robot-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Robot-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Robot-Bold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Robot-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Robot-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Robot-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Robot-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Robot-Regular', fontSize: SIZES.body5, lineHeight: 22},
};
