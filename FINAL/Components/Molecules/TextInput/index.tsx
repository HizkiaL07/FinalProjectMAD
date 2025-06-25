import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({text, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
        style={styles.input}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
    marginBottom: 6,
  },
  input: {
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderRadius: 25,
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
