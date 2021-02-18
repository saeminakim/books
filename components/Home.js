import React, { useState } from 'react';
import { Text, ImageBackground, View } from 'react-native';

import { Card, Overlay, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/style';

const image = require('../img/books-1617327_1920.jpg');

const Home = () => {

  const [quote, setQuote] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const updateState = () => {
    //Handler to enable of disable TextInput
    //Make TextInput Enable/Disable
    setIsEditable(!isEditable);
  };


  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      {/* placeholder에 값을 고정시키는건 됐는데....quote도 가능한지 확인 필요 */}
      <Button 
        onPress={setQuote}
        icon={<Icon name='pencil-bin-outline' type='ionicon' />}
      />
        <TextInput
          placeholder={
            isEditable ?
            'Please Insert value' :
            'Input Disabled'
          }
          underlineColorAndroid="transparent"
          style={[
            styles.textInputStyle,
            {
              borderColor: isEditable ?
              'black' : 'red',
              backgroundColor: isEditable ?
              'white' : '#d8d8d8',
            },
          ]}
          //To make TextInput enable/disable
          editable={isEditable}
        />
        <Button
          title={
            isEditable
              ? 'Click to Disable TextInput'
              : 'Click to Enable TextInput'
          }
          onPress={updateState}
        /> 
      <Text style={styles.text}>{quote}</Text>
    </ImageBackground>
    </View>

  );
}

export default Home;