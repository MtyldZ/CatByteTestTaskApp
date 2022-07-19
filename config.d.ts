import 'react-redux';
import {GlobalState} from './src/store/state';

declare module 'react-redux' {
  interface DefaultRootState extends GlobalState {}
}
