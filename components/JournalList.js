import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { removeList } from '../redux/actions/index'
import styles from '../style/style';

const JournalList = ({navigation}) => {

  const lists = useSelector(state => state.actions);

  // if (lists == ""){
  //   return (
  //     <View style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center"
  //     }}>
  //       <Text>아직 읽은 책이 없어요😮</Text>
  //     </View>
  //   );
  // }

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        lists.map((item, i) => (
          <ListItem containerStyle={{width:"90%"}} key={i} onPress={()=>{navigation.navigate("JournalDetails", {id: item.id})}}>
            <Avatar source={{uri: item.thumbnail}} style={styles.thumbnail}/>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
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