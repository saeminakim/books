import React, { useState } from 'react';
import { Text, ImageBackground, View } from 'react-native';

import { Card, Overlay, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/style';

const image = require('../img/books-1617327_1920.jpg');

const Home = () => {

  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>마음에 드는 글귀</Text>
    </ImageBackground>
    </View>

  );
}

export default Home;