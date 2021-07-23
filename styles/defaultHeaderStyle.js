import {Platform} from 'react-native';
import {COLORS} from '../constants/colors';

export const defaultHeaderStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primary : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
};
