import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  const user = 'Mark Ozaeta';

  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
          }}
        >
          Welcome,
        </Text>
        <Text
          style={{
            fontFamily: 'outfit-medium',
            fontSize: 25,
          }}
        >
          {user}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
