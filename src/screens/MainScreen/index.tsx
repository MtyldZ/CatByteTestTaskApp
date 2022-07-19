import React, {memo, useCallback, useEffect} from 'react';
import {Button, ScrollView, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {UserService} from '../../api/UserService';
import {setUserAction} from '../../store/user/action';
import {UserTile} from '../../components/UserTile';

export const MainScreen = memo(function MainScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.userList);

  const fetchUsers = useCallback(async () => {
    const userList = await UserService.fetchUsers();
    dispatch(setUserAction(userList));
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.container}>
        {userList.map(user => (
          <UserTile user={user} key={`key_${user.id}`} />
        ))}
      </ScrollView>
      <View style={styles.button}>
        <Button color={'#33f'} title={'Add User'} />
      </View>
    </>
  );
});
