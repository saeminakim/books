import React from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import styles from '../style/style';

const List = ({ navigation, list }) => {
  return (
    <View style={{flex: 1, backgroundColor: '#eceef8'}}>
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

export default List;