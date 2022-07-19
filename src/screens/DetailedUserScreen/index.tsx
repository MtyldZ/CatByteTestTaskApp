import React, {memo} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
  const user = props.route.params.user;
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text style={styles.text}>FirstName</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.firstName}
        />
        <Text style={styles.text}>LastName</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.lastName}
        />
        <Text style={styles.text}>Image URL</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.image}
        />
        <Text style={styles.text}>Age</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.age.toFixed()}
        />
        <Text style={styles.text}>Company Address</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.company.address.address}
        />
        <Text style={styles.text}>Company Postal Code</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.company.address.postalCode}
        />
        <Text style={styles.text}>Company State</Text>
        <TextInput
          style={styles.inputStyle}
          editable={false}
          value={user.company.address.state}
        />
      </View>
      <View style={styles.button}>
        <Button
          title={'Back'}
          onPress={() =>
            // @ts-ignore
            navigation.navigate('Main')
          }
        />
      </View>
    </>
  );
});
