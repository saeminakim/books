import React, { useState, useCallback } from 'react';

import { View } from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Search = ({navigation}) => {

  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    setKeyword(search);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eceef8'}}>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="검색어를 입력하세요"
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>    
    </View>
  );
}

export default Search;