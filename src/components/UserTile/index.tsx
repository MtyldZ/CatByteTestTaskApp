import React, {memo, useCallback} from 'react';
import {User} from '../../models/user.model';
import {styles} from './style';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const UserTile = memo((props: {user: User}) => {
  const {firstName, lastName, image} = props.user;
  const navigation = useNavigation();

  const onPressed = useCallback(() => {
    console.log('pressed');
    navigation.navigate('DetailedUser', {user: props.user});
  }, [navigation, props.user]);

  return (
    <TouchableOpacity onPress={onPressed} style={styles.userTile}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
    </TouchableOpacity>
  );
});
