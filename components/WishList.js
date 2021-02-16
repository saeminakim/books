import React from 'react';
import { View,ScrollView } from 'react-native';

import { LISTDATA } from '../shared/list';

import { ListItem, Avatar } from 'react-native-elements';
import styles from '../style/style';

const list = LISTDATA;

const WishList = () => {
  return (
    <ScrollView>
  {
    list.map((item, i) => (
      // 리스트 때문에 flex 안 먹는 것 같음. 다른 방법 있는지 찾아보자..!
      <ListItem key={i} style={{flex: 1, flexDirection: 'row'}} bottomDivider>
        <Avatar source={{uri: item.thumbnail}} style={{width: 70, height: 70}}/>
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

export default WishList;