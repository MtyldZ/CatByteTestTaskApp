import {StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  userTile: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    margin: screenWidth * 0.05,
    borderRadius: 12,
  },
  image: {
    width: '90%',
    height: '90%',
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  },
});
