import { Platform, Dimensions } from 'react-native';

// iPhone X、iPhone XS
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone XR、iPhone XS Max
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const DEVICE_SIZE = Dimensions.get('window');
const { height: D_HEIGHT, width: D_WIDTH } = DEVICE_SIZE;

export { DEVICE_SIZE };

export const isiOS = () => Platform.OS === 'ios'

export const isAndroid = () => Platform.OS === 'android'

export const isiPhoneX = () => {
  return (
    isiOS() &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
    ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
      (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
  );
};

export const ifiPhoneX = (iPhoneXStyle, regularStyle) => isiPhoneX() ? iPhoneXStyle : regularStyle
