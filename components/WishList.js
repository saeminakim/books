// 위시리스트(읽을 책)에서 선택하면 저널리스트(읽은 책)로 들어가게 기능 구현하기 
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../redux/actions/index';
import { removeList } from '../redux/actions/index';


import { WISHDATA } from '../shared/wishlist';

import { ListItem, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/style';

const list = WISHDATA;

const WishList = ({route, navagation}) => {

  const { id } = route.params;
  const newItem = WISHDATA.filter(item => item.id == id)[0];
  const dispatch = useDispatch();
  const actions = useSelector(state => state.actions);

  const isExistedList = actions.filter(item => item.id == id).length > 0 ? true : false;

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
        {
          isExistedList
          ?
          <Ionicons 
            onPress={()=>{dispatch(removeList(id))}}
            name={'remove-outline'} size={20} color={'#2F3C7E'}
            title='REMOVE'
          />
          :
          <Ionicons 
          onPress={()=>{dispatch(addList(id))}}
          name={'add-outline'} size={20} color={'#2F3C7E'}
          title='ADD'
        />
        }
      </ListItem>
    ))
  }
    </ScrollView>
  );
}

export default WishList;