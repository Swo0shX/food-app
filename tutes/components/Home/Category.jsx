import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../../constants/Colors';

import Ionicons from '@expo/vector-icons/Ionicons';
const Category = () => {
  const localAssets = {
    personal: require('../../assets/images/logo.png'),
    eWallet: require('../../assets/images/eWalletLogo.png'),
    // banner3: require('../../assets/images/banner3.png'),
    // banner4: require('../../assets/images/banner4.jpg'),
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 2 }}
      >
        <TouchableOpacity style={{ flex: 'flex', alignItems: 'center' }}>
          <View
            style={{
              paddingTop: 10,
              paddingRight: 15,
              paddingLeft: 9,
              alignItems: 'center',
            }}
          >
            <Image
              source={localAssets.personal}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            ></Image>
            <Text>Personal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 'flex', alignItems: 'center' }}>
          <View
            style={{ paddingTop: 10, paddingRight: 15, alignItems: 'center' }}
          >
            <FontAwesome6
              name='wallet'
              size={58}
              color={Colors.PRIMARY}
            />
            <Text>eWallet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 'flex', alignItems: 'center' }}>
          <View
            style={{ paddingTop: 10, paddingRight: 12, alignItems: 'center' }}
          >
            <FontAwesome6
              name='pen-to-square'
              size={56}
              color={Colors.PRIMARY}
            />
            <Text style={{ paddingTop: 3 }}>Loans</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 'flex', alignItems: 'center' }}>
          <View
            style={{ paddingTop: 10, paddingRight: 12, alignItems: 'center' }}
          >
            <Ionicons
              name='card'
              size={64}
              color={Colors.PRIMARY}
            />
            <Text style={{ marginTop: -3 }}>Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 'flex', alignItems: 'center' }}>
          <View
            style={{ paddingTop: 16, paddingRight: 15, alignItems: 'center' }}
          >
            <Ionicons
              name='receipt-outline'
              size={55}
              color={Colors.PRIMARY}
            />
            <Text style={{ paddingTop: 1 }}>Bills</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
