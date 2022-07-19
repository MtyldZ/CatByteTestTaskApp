import React, {memo, useCallback, useEffect} from 'react';
import {Button, ScrollView, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {DefaultRootState, useDispatch, useSelector} from 'react-redux';
import {UserService} from '../../api/UserService';
import {setUserAction} from '../../store/user/action';
import {UserTile} from '../../components/UserTile';
import {User} from '../../models/user.model';

export const MainScreen = memo(function MainScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userList = useSelector<DefaultRootState, User[]>(
    state => state.user.userList,
  );

  const onAddUserPressed = useCallback(() => {
    // @ts-ignore
    navigation.navigate('AddUser');
  }, [navigation]);

  const fetchUsers = useCallback(async () => {
    const users = await UserService.fetchUsers();
    dispatch(setUserAction(users));
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {userList.map((user, index) => (
          <UserTile user={user} key={`key_${index}`} />
        ))}
      </ScrollView>
      <View style={styles.button}>
        <Button onPress={onAddUserPressed} color={'#33f'} title={'Add User'} />
      </View>
    </>
  );
});
