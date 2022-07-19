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
  inputStyle: {
    borderRadius: 10,
    color: '#505050',
    marginHorizontal: 16,
    fontSize: 16,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#c8c5cb',
    paddingVertical: 2,
    marginBottom: 4,
  },
  text: {
    marginHorizontal: 16,
    fontSize: 20,
    color: '#3d3d3d',
  },
});
