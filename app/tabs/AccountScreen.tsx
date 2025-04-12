// src/screens/AccountScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Switch } from 'react-native';
import MenuItem from '../components/MenuItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  MyDetailScreen: undefined;
  AboutScreen:undefined

};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/100' }} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.name}>Nguyen Van A</Text>
            <Text style={styles.email}>hoangdat07082005@gmail.com</Text>
          </View>
          <TouchableOpacity>
          </TouchableOpacity>
        </View>

        <MenuItem title="Orders" iconName="shopping-bag" />
        
        
        <MenuItem title="My Details" iconName="user"  onPress={() => navigation.navigate('MyDetailScreen')}/>
        <MenuItem title="Delivery Address" iconName="map-marker" />
        <MenuItem title="Payment Methods" iconName="credit-card" />
        <MenuItem title="Promo Card" iconName="gift" />
        <MenuItem title="Notifications" iconName="bell" />
        <MenuItem title="About" iconName="info-circle" onPress={() => navigation.navigate('AboutScreen')}/>
        <View style={styles.themeContainer}>
          <Text style={styles.themeText}>Change Theme</Text>
          <Switch 
            value={isDarkMode} 
            onValueChange={toggleTheme} 
          />
        </View>

       

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('hihih')}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  edit: {
    fontSize: 20,
    marginLeft: 'auto',
    color: '#00A86B',
  },
  logoutButton: {
    backgroundColor: '#53B175',
    padding: 15,
    margin: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF9FF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFF',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  themeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default AccountScreen;
