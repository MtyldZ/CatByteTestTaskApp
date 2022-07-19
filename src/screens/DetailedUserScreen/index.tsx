import React, {memo, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {User} from '../../models/user.model';
import {styles} from './style';

type DetailedUserScreenProps = {
  route: {
    params: {
      user: User;
    };
  };
};

export const DetailedUserScreen = memo(function DetailedUserScreen(
  props: DetailedUserScreenProps,
) {
  const [user, _] = useState<User>(props.route.params.user);
  const navigation = useNavigation();

  // @ts-ignore
  return (
    <>
      <View>
        <Text>FirstName</Text>
        <TextInput editable={false} value={user.firstName} />
        <Text>LastName</Text>
        <TextInput editable={false} value={user.lastName} />
        <Text>Image URL</Text>
        <TextInput editable={false} value={user.image} />
        <Text>Age</Text>
        <TextInput editable={false} value={user.age.toFixed()} />
        <Text>Company Address</Text>
        <TextInput editable={false} value={user.company.address.address} />
        <Text>Company Postal Code</Text>
        <TextInput editable={false} value={user.company.address.postalCode} />
        <Text>Company State</Text>
        <TextInput editable={false} value={user.company.address.state} />
      </View>
      <View style={styles.button}>
        <Button title={'Back'} onPress={() => navigation.navigate('Main')} />
      </View>
    </>
  );
});
