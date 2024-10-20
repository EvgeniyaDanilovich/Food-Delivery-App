import React from 'react';
import {TouchableOpacity, ViewStyle, Text, StyleSheet} from 'react-native';

interface BigButtonProps {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
}

export const BigButton: React.FC<BigButtonProps> = ({
  onPress,
  label,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.BigButton, style]} onPress={onPress}>
      <Text style={styles.BigButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BigButton: {
    backgroundColor: '#FF7622',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  BigButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
