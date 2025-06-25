import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginTop: 38,
    marginBottom: 24,
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
  },
});
