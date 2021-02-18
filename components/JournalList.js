import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { removeList } from '../redux/actions/index'

const JournalList = ({navigation}) => {

  const lists = useSelector(state => state.actions);

  if (lists == null){
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>아직 읽은 책이 없어요😮</Text>
      </View>
    );
  }

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        lists.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("WishDetails", {id: item.id})}}>
            <Avatar source={{uri: item.thumbnail}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeList(item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default JournalList;