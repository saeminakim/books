import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const AddJournal = ({ navigation }) => {

  const [postText, setPostText] = React.useState('');

    return (
      <>
        <TextInput
          multiline
          placeholder="이 책 어땠나요?"
          style={{ height: 300, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="  저장"
          icon={<Icon name='checkmark' type='ionicon' color='#2F3C7E'/>}
          type='clear'
          titleStyle={{color: '#2F3C7E'}}
          onPress={() => {
            navigation.navigate('JournalDetails', { post: postText });
          }}
        />
      </>
    );
  }

export default AddJournal;