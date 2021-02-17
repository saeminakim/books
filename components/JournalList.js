import React from 'react';
import { ScrollView } from 'react-native';

import { LISTDATA } from '../shared/list';

import { ListItem, Avatar } from 'react-native-elements';
import styles from '../style/style';

const list = LISTDATA;

const JournalList = ({navigation}) => {
  return (
    <ScrollView>
    {
      list.map((item, i) => (
        <ListItem 
          key={i} 
          onPress={()=>{navigation.navigate("JournalDetails", {id: item.id})}}
          bottomDivider
          >
          <Avatar source={{uri: item.thumbnail}} style={styles.thumbnail}/>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    }
    </ScrollView>
  );
}

export default JournalList;