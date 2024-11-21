import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import ListByCategory from '../../components/Home/ListByCategory';
import Category from '../../components/Home/Category';

const Home = () => {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      {/*Header */}
      <Header />
      {/*Slider */}
      <Slider />
      {/*Category */}
      <Category />
      {/* <ListByCategory /> */}

      {/*List of Pets */}
      {/*Add New Pet Option */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
