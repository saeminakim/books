// 리스트(읽을 책)에서 선택하면 저널리스트(읽은 책)로 들어가게 기능 구현하기 
import React, { useCallback, useEffect, useState } from 'react';
import List from './List'

import api from '../api/wishlist'

const ListContainer = ({ navigation }) => {

  const [list, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.list();
    setList(result.data);
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        getList();
      }
    )
    return unsubscribe;
  }, [navigation])

  return (
    <List navigation={navigation} list={list}></List>
  );
}

export default ListContainer;