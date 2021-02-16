import React, { useState } from 'react';
import { Text } from 'react-native';

import { Card, Overlay, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  const [quote, setQuote] = useState("");

  const changeQuote = () => {

  }

  return (
    <Card>
      <Card.Title containerStyle={{alignItems: "flex-end"}}>
       <Ionicons name="ellipsis-vertical-outline" color={'#2F3C7E'}
          onPress={toggleOverlay}
       />
       <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Input inputContainerStyle={{width: '80%', height: '80%'}}></Input>
       </Overlay>
      </Card.Title>
        <Card.Image source={require('../img/open-book-1428428_1920.jpg')}>
        <Card.Divider/>
      </Card.Image>
      <Text style={{marginTop: 10, marginBottom: 10}}>
        {quote}
      </Text>
    </Card>
  );
}

export default Home;