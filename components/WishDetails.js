import React from 'react';
import { ScrollView, Text } from 'react-native';

import { WISHDATA } from '../shared/wishlist';

import { Card, Avatar, Icon, Button } from 'react-native-elements';
import styles from '../style/style';
import { useDispatch, useSelector } from 'react-redux';

import { addList, removeList } from '../redux/actions';

const WishDetails = ({route, navigation}) => {

  const { id } = route.params;

  const item = WISHDATA.filter(item => item.id == id)[0];

  const dispatch = useDispatch();

  const lists = useSelector(state => state.actions);

  const isExistedList = lists.filter(item => item.id == id).length > 0 ? true : false;


  return (  
    <ScrollView>
      <Card>
      <Card.Title style={styles.title}>{item.title}</Card.Title>  
        <Avatar style={{width: 100, height: 130}} source={{uri:item.thumbnail}} />       
          <Card.Divider style={{marginTop: 10}}/>
          <Text>{item.contents}</Text>
        {
          isExistedList
            ?
            <Button 
              onPress={() => {dispatch(removeList(id))}}
              type='clear'
              icon={<Icon name='remove-circle-outline' type='ionicon' color='#2F3C7E'/>}
              title='  지우기'
              buttonStyle={{marginTop: 10}}
              titleStyle={{color: '#2F3C7E'}}
            />
            :
            <Button 
              onPress={() => {dispatch(addList(item))}}
              type='clear'
              icon={<Icon name='book-outline' type='ionicon' color='#2F3C7E'/>}
              title='  마음산.책으로'
              buttonStyle={{marginTop: 10}}
              titleStyle={{color: '#2F3C7E'}}
            />
        }
      </Card>
    </ScrollView>
  );
}

export default WishDetails;