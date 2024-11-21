import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import data from '../../constants/slider.json';
import { Banner1, Banner2, Banner3 } from '../../constants/Banner';
const Slider = () => {
  const [sliderList, setSliderList] = useState([]);
  const banners = [Banner1, Banner2, Banner3];

  const localAssets = {
    banner1: require('../../assets/images/banner1.jpg'),
    banner2: require('../../assets/images/banner2.png'),
    banner3: require('../../assets/images/banner3.png'),
    banner4: require('../../assets/images/banner4.jpg'),
  };

  useEffect(() => {
    GetSliders();
  }, []);

  const GetSliders = async () => {
    setSliderList(data);
  };
  return (
    <View style={{ paddingTop: 10 }}>
      <View>
        <Image
          // source={require('../../assets/images/banner1.jpg')}
          source={localAssets.banner3}
          // source={item.imageUrl}
          style={styles.sliderImage}
          resizeMethod='contain'
        />
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get('screen').width * 0.9,
    //width: 200,
    height: 170,
    borderRadius: 15,
    marginRight: 15,
  },
});
