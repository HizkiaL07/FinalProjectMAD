import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../Components/Molecules';
import {Button, Gap} from '../../Components/Atoms';
import {ImagePhoto} from '../../Assets';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="SIGN UP" />

      <Image source={ImagePhoto} style={styles.logo} />

      <View style={styles.contentContainer}>
        <TextInput text="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput text="Email" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" color="#1E3269" buttonColor="#FFFFFF" />
        <Gap height={16} />
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
    borderRadius: 60,
    resizeMode: 'contain',
    marginTop: 12,
  },
  contentContainer: {
    marginTop: 32,
    width: '80%',
  },
});
