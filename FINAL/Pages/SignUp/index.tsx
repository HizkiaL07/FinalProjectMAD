import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput} from '../../Components/Molecules';
import {Button, Gap} from '../../Components/Atoms';
import {ImagePhoto} from '../../Assets';
import {showMessage} from 'react-native-flash-message';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerNewUser = () => {
    console.log({fullName, email, password});
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        //Simpan data di realtime database
        set(ref(db, 'users/' + user.uid), {
          fullName: fullName,
          email: email,
        });

        showMessage({
          message: 'Akun anda berhasil di daftarkan',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };
  return (
    <View style={styles.pageContainer}>
      <Header text="SIGN UP" />

      <Image source={ImagePhoto} style={styles.logo} />

      <View style={styles.contentContainer}>
        <TextInput
          text="Full Name"
          placeholder="Type your full name"
          value={fullName}
          onChangeText={e => setFullName(e)}
        />
        <Gap height={16} />
        <TextInput
          text="Email"
          placeholder="Type your email address"
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <Gap height={16} />
        <TextInput
          text="Password"
          placeholder="Type your password"
          value={password}
          onChangeText={e => setPassword(e)}
        />
        <Gap height={24} />
        <Button
          text="Continue"
          onPress={registerNewUser}
          color="#1E3269"
          buttonColor="#FFFFFF"
        />
        <Gap height={16} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 50,
    resizeMode: 'contain',
    marginTop: 12,
  },
  contentContainer: {
    marginTop: 32,
    width: '80%',
  },
});
