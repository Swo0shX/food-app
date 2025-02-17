import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors';

import FontAwesome from '@expo/vector-icons/FontAwesome';
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.PRIMARY }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='home'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          title: 'Favorite',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='heart'
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='inbox'
        options={{
          title: 'Inbox',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='mail'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name='user-circle'
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
