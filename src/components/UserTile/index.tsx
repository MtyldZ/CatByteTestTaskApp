import React, {memo, useCallback} from 'react';
import {User} from '../../models/user.model';
import {styles} from './style';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {removeUserAction} from '../../store/user/action';

export const UserTile = memo((props: {user: User}) => {
  const {id, firstName, lastName, image} = props.user;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPressed = useCallback(() => {
    // @ts-ignore
    navigation.navigate('DetailedUser', {user: props.user});
  }, [navigation, props.user]);

  const onRemoveUserPressed = useCallback(() => {
    dispatch(removeUserAction(id));
  }, [dispatch, id]);

  return (
    <>
      <TouchableOpacity onPress={onPressed} style={styles.userTile}>
        <TouchableOpacity
          style={styles.removeUserButton}
          onPress={onRemoveUserPressed}>
          <Text>X</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
      </TouchableOpacity>
    </>
  );
});
