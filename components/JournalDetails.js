import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { updateList } from '../redux/actions';
import styles from '../style/style';

import api from '../api/journallist'

const JournalDetails = ({ navigation, route }) => {

  // const image = { uri: "https://helloimlily-vueapp.s3.ap-northeast-2.amazonaws.com/notepad_nobg.png" };
  const { id } = route.params;
  const detail = route.params;

  const [item, setItem] = useState();
  const dispatch = useDispatch();

  const isExistedPost = detail.post.length > 1 ? true : false;

  const getItems = useCallback(async () => {
    const result = await api.update(id);
    setItem(result.data.post);
  }, [])

  useEffect(() => {
    getItems()
  }, []);

  return (

    <Card containerStyle={{ height: '95%' }}>
      <Card.Title style={styles.title}>{detail.title}</Card.Title>
      <Card.Divider />
      {
        isExistedPost
          ?
          <Text>{detail.post}</Text>
          :
          <View>
            <TextInput
              multiline
              placeholder="이 책 어땠나요?"
              style={{ height: 300, padding: 10, backgroundColor: 'white' }}
              value={item}
              onChangeText={setItem}
            />
            <Button
              title="  저장"
              icon={<Icon name='checkmark' type='ionicon' color='#2F3C7E' />}
              type='clear'
              titleStyle={{ color: '#2F3C7E' }}
              onPress={() => { dispatch(updateList(id, item)); navigation.navigate("마음산.책") }}
            />
          </View>
      }
    </Card>

  );
}

export default JournalDetails;