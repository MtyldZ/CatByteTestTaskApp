import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
export const screenWidth = Math.min(dimensions.width, dimensions.height);
export const screenHeight = Math.max(dimensions.width, dimensions.height);
