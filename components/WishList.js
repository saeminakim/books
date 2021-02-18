// 위시리스트(읽을 책)에서 선택하면 저널리스트(읽은 책)로 들어가게 기능 구현하기 
import React from 'react';
import { ScrollView } from 'react-native';

import { WISHDATA } from '../shared/wishlist';

import { ListItem, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/style';

const WishList = ({ navigation }) => {

  const list = WISHDATA;

  return (
    <ScrollView>
    {
      list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{uri: item.thumbnail}} style={styles.thumbnail}/>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.author}</ListItem.Subtitle>         
          </ListItem.Content>
            <Ionicons 
              onPress={()=>{navigation.navigate("WishDetails",{id: item.id})}}
              name={'add-outline'} size={20} color={'#2F3C7E'}
            />
        </ListItem>
      ))
    }
    </ScrollView>
  );
}

export default WishList;