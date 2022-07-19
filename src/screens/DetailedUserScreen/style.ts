import {StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    width: screenWidth,
  },
  button: {
    marginHorizontal: 12,
    marginVertical: 16,
  },
});
