import React from 'react';
import {View, StyleSheet} from 'react-native';

interface PaginationDotProps {
  isActive: boolean;
}

export const PaginationDot: React.FC<PaginationDotProps> = ({isActive}) => {
  return (
    <View
      style={[styles.dot, {backgroundColor: isActive ? '#FF7622' : '#FFE1CE'}]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
