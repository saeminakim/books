import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ImageBackground, View, TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/style';

const image = { uri: "https://helloimlily-vueapp.s3.ap-northeast-2.amazonaws.com/books-1617327_1920.jpg" };

const Home = () => {

  const [isEditable, setIsEditable] = useState(false);
  const [quote, onChangeText] = useState('좋아하는 글귀를 입력하세요😉');

  const updateState = () => {
    setIsEditable(!isEditable);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ flex: 0, flexDirection: 'row-reverse' }}>
          <Ionicons
            onPress={updateState}
            name={'pencil'} size={20} color={'black'}
          />
        </View>
        <TextInput
          placeholder={
            isEditable ? '' : quote}
          underlineColorAndroid="transparent"
          value={quote}
          numberOfLines={15}
          multiline={true}
          onChangeText={quote => onChangeText(quote)}
          style={[
            styles.textInputStyle,
            {
              backgroundColor: isEditable ? '#f2f2f2a0' : '#000000a0',
              color: isEditable ? '#2F3C7E' : '#FBEAEB',
              fontSize: 20
            },
          ]}
          editable={isEditable}
        />
      </ImageBackground>
    </SafeAreaView>

  );
}

export default Home;