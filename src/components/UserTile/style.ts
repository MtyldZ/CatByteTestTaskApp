import {StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  removeUserButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  userTile: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    margin: screenWidth * 0.05,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  },
});
