import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { LISTDATA } from '../shared/list';
import { WISHDATA } from '../shared/wishlist';

import { ListItem, Card, Avatar, Icon } from 'react-native-elements';
import styles from '../style/style';
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import { addList } from '../redux/actions';

// const list = LISTDATA;

const WishDetails = ({route, navigation}) => {

  const { id } = route.params;

  const item = WISHDATA.filter(item => item.id == id)[0];

  const dispatch = useDispatch();

  const lists = useSelector(state => state.actions);
  console.log("---WishDetails---")
  console.log(lists)

  const isExistedList = lists.filter(item => item.id == id).length > 0 ? true : false;


  return (  
    <ScrollView>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <View>
          <Avatar style={{width: 130, height: 150}} source={{uri:item.thumbnail}} />
          <Card.Divider />
          <Text>{item.contents}</Text>
        </View>
        {
          isExistedList
          ?
          <Button 
            onPress={() => {dispatch(removeList(id))}}
            icon={<Icon name='trash-bin-outline' type='ionicon' />}
            title='Remove'
          />
          :
          <Button 
            onPress={() => {dispatch(addList(item))}}
            icon={<Icon name='add-outline' type='ionicon' />}
            title='Add'
          />
        }
      </Card>
    </ScrollView>


    // <ScrollView>
    //   <ListItem>
    //     <Avatar source={{uri: item.thumbnail}} style={styles.thumbnail}/>
    //     <ListItem.Content>
    //       <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
    //       <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
    //       <Card>
    //         <Text>{item.contents}</Text>
    //       </Card>
    //     </ListItem.Content>
    //     <Ionicons 
    //       onPress={() => {navigation.navigate('AddJournal')}}
    //       name={'pencil-outline'} size={20} color={'#2F3C7E'} />
    //   </ListItem>
    // </ScrollView>
  );
}

export default WishDetails;