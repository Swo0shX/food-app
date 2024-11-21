import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import * as Linking from 'expo-linking';
import { Link, router, useNavigation } from 'expo-router';
const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <Image
        source={require('../../assets/images/login.png')}
        style={{
          width: '100%',
          height: 500,
        }}
      />
      <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            textAlign: 'center',
            color: Colors.GRAY,
          }}
        >
          Let's start?
        </Text>
        <Link
          href={'/(tabs)/home'}
          asChild
        >
          <Pressable
            // onPress={() => navigation.navigate('Home')}
            style={{
              padding: 14,
              marginTop: 100,
              backgroundColor: Colors.PRIMARY,
              width: '100%',
              borderRadius: 14,
            }}
          >
            <Text
              style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Get Started
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
