import React, {memo, useCallback, useRef, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {User} from '../../models/user.model';
import {DefaultRootState, useDispatch, useSelector} from 'react-redux';
import {addUserAction} from '../../store/user/action';

export const AddUserScreen = memo(function AddUserScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const lastUserID = useSelector<DefaultRootState, number>(
    state => state.user.userList[state.user.userList.length - 1].id || 0,
  );

  const firstNameRef = useRef<string>('');
  const lastNameRef = useRef<string>('');
  const imageRef = useRef<string>('');
  const companyAddressRef = useRef<string>('');
  const companyCityRef = useRef<string>('');
  const companyPostalCodeRef = useRef<string>('');
  const companyStateRef = useRef<string>('');

  const [age, setAge] = useState('');

  const onAddUserPressed = useCallback(() => {
    const user: User = {
      id: lastUserID + 1,
      firstName: firstNameRef.current,
      lastName: lastNameRef.current,
      image: imageRef.current,
      age: parseInt(age, 10),
      company: {
        address: {
          address: companyAddressRef.current,
          city: companyCityRef.current,
          postalCode: companyPostalCodeRef.current,
          state: companyStateRef.current,
        },
      },
    };
    dispatch(addUserAction(user));
    // @ts-ignore
    navigation.navigate('Main');
  }, [age, dispatch, lastUserID, navigation]);

  const onBackPressed = useCallback(() => {
    // @ts-ignore
    navigation.navigate('Main');
  }, [navigation]);

  return (
    <>
      <View>
        <Text style={styles.text}>FirstName</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (firstNameRef.current = text)}
        />
        <Text style={styles.text}>LastName</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (lastNameRef.current = text)}
        />
        <Text style={styles.text}>Image URL</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (imageRef.current = text)}
        />
        <Text style={styles.text}>Age</Text>
        <TextInput
          keyboardType={'number-pad'}
          style={styles.inputStyle}
          value={age}
          onChangeText={text => setAge(text.replace(/\D/g, ''))}
        />
        <Text style={styles.text}>Company Address</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (companyAddressRef.current = text)}
        />
        <Text style={styles.text}>Company City</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (companyCityRef.current = text)}
        />
        <Text style={styles.text}>Company Postal Code</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (companyPostalCodeRef.current = text)}
        />
        <Text style={styles.text}>Company State</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => (companyStateRef.current = text)}
        />
      </View>
      <View style={styles.button}>
        <Button title={'Add User'} onPress={onAddUserPressed} />
      </View>
      <View style={styles.button}>
        <Button title={'Back'} onPress={onBackPressed} />
      </View>
    </>
  );
});
