import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Header, Loading, TextInput} from '../../Components/Molecules';
import {Button, Gap} from '../../Components/Atoms';
import {ImagePhoto} from '../../Assets';
import {showMessage} from 'react-native-flash-message';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const onSignIn = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setLoading(false);
        const user = userCredential.user;
        navigation.navigate('Home', {uid: user.uid});
      })
      .catch(error => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };
  return (
    <>
      <View style={styles.pageContainer}>
        <Header text="SIGN IN" />

        <Image source={ImagePhoto} style={styles.logo} />

        <View style={styles.contentContainer}>
          <TextInput
            text="Email"
            placeholder="Type your email address"
            onChangeText={e => setEmail(e)}
          />
          <Gap height={16} />
          <TextInput
            text="Password"
            placeholder="Type your password"
            onChangeText={e => setPassword(e)}
          />
          <Gap height={24} />
          <Button
            text="SIGN IN"
            color="#1E3269"
            buttonColor="#FFFFFF"
            onPress={onSignIn}
          />
          <Gap height={16} />
          <Button
            text="Create Account"
            color="#C4C4C4"
            buttonColor="#FFFFFF"
            width={180}
            align="center"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

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
