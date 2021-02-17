import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../style/style';

const JournalDetails = () => {
  const [text, setText] = useState('');
  return (
    <View>
    <Text>여기는 JournalDetails</Text>
    <Card>
      <TextInput 
        style={styles.textContainer}    
        placeholder={"독서노트를 남겨주세요"}
        numberOfLines={20}
        multiline={true}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </Card>
    </View>
  );
}

export default JournalDetails;