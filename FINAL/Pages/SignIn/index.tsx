import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../Components/Molecules';
import {Button, Gap} from '../../Components/Atoms';
import {ImagePhoto} from '../../Assets';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="SIGN IN" />

      <Image source={ImagePhoto} style={styles.logo} />

      <View style={styles.contentContainer}>
        <TextInput text="Email" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="SIGN IN" color="#1E3269" buttonColor="#FFFFFF" />
        <Gap height={16} />
        <Button
          text="Create Account"
          color="#C4C4C4"
          buttonColor="#FFFFFF"
          width={180}
          align="center"
        />
      </View>
    </View>
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
    borderRadius: 80,
    resizeMode: 'contain',
    marginTop: 12,
  },
  contentContainer: {
    marginTop: 32,
    width: '80%',
  },
});
