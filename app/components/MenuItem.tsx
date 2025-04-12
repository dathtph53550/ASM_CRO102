// src/components/MenuItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Dùng icon phù hợp

interface MenuItemProps {
  title: string;
  iconName: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={20} color="#000" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Icon name="chevron-right" size={16} color="#999" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});

export default MenuItem;
