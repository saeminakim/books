import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import styles from '../style/style';

const AddJournal = ({route, navigation}) => {

  const [text, setText] = useState('');

  return (
    <View>
      <Text>AddJournal</Text>
        <TextInput 
          style={styles.textContainer}    
          placeholder={"독서노트를 남겨주세요"}
          numberOfLines={20}
          multiline={true}
          value={text}
          onChangeText={setText}
        />      
        <Button 
          title="저장"
          onPress={() => {
            navigation.navigate('JournalDetails', { text: setText })
          }}
        />
    </View>
  );
}

export default AddJournal;