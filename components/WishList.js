// 위시리스트(읽을 책)에서 선택하면 저널리스트(읽은 책)로 들어가게 기능 구현하기 
import React from 'react';
import { View, ScrollView } from 'react-native';
import { WISHDATA } from '../shared/wishlist';
import { ListItem, Avatar } from 'react-native-elements';

import styles from '../style/style';

const WishList = ({ navigation }) => {

  const list = WISHDATA;

  return (
    <View style={{flex: 1}}>
      <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"center", justifyContent:"center"}}
      >
      {
        list.map((item, i) => (
          <ListItem 
            containerStyle={{width: '90%'}}
            key={i} 
            onPress={()=>{navigation.navigate("WishDetails",{id: item.id})}}
            bottomDivider>
            <Avatar source={{uri: item.thumbnail}} style={styles.thumbnail}/>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.author}</ListItem.Subtitle>         
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  );
}

export default WishList;