import React from 'react';
import { View } from 'react-native';
import { WISHDATA } from '../shared/wishlist'

// https://reactnativeelements.com/docs
import { ListItem } from 'react-native-elements'

const SearchList = ({ navigation, keyword }) => {

  let list = WISHDATA;
  console.log("--search list--")
  console.log(list)

  console.log("--keyword--")
  console.log(keyword)

  if(keyword && keyword.length > 1){
    list = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1 )

    return(
      list.map((item, i) => (
        <ListItem containerStyle={{width:"90%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('WishDetails', {id: item.id})}}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
    )
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;