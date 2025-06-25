import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  text,
  color = '#1E3269',
  buttonColor = '#FFFFFF',
  width = '100%',
  align = 'stretch',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button(color, width, align)]}
      activeOpacity={0.7}>
      <Text style={styles.buttonText(buttonColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (color, width, align) => ({
    backgroundColor: color,
    paddingVertical: 14,
    borderRadius: 10,
    width: width,
    alignSelf: align,
  }),
  buttonText: buttonColor => ({
    color: buttonColor,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    letterSpacing: 1,
  }),
});
