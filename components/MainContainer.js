import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';

import Home from './Home'
import JournalList from './JournalList'
import Search from './Search'
import List from './ListContainer'
import WishDetails from './WishDetails'
import JournalDetails from './JournalDetails';
import AddJournal from './AddJournal';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const JournalStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ListStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2F3C7E',
      },
      headerTintColor: '#FBEAEB',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center", }} />
    </HomeStack.Navigator>
  )
}

const JournalStackScreen = () => {
  return (
    <JournalStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2F3C7E',
      },
      headerTintColor: '#FBEAEB',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <JournalStack.Screen name="마음산.책" component={JournalList} options={{title:"마음산.책", headerTitleAlign:"center"}}  />
      <JournalStack.Screen name="JournalDetails" component={JournalDetails} options={{title:"독서노트", headerTitleAlign:"center"}}  />
      <JournalStack.Screen name="AddJournal" component={AddJournal} options={{title:"새 글 쓰기", headerTitleAlign:"center"}}  />
    </JournalStack.Navigator>
  )
}

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2F3C7E',
      },
      headerTintColor: '#FBEAEB',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <SearchStack.Screen name="검색" component={Search} options={{title:"도서 검색", headerTitleAlign:"center"}}  />
      <SearchStack.Screen name="WishDetails" component={WishDetails} options={{title:"책 소개", headerTitleAlign:"center"}}  />
    </SearchStack.Navigator>
  )
}
const ListStackScreen = () => {
  return (
    <ListStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2F3C7E',
      },
      headerTintColor: '#FBEAEB',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <ListStack.Screen name="마음살.책" component={List} options={{title:"마음살.책", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="WishDetails" component={WishDetails} options={{title:"책 소개", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}


const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case '마음산.책':
        iconName = focused
          ? 'book'
          : 'book-outline'; 
        break;
      case '검색':
        iconName = focused
          ? 'search'
          : 'search-outline'; 
        break;
      case '마음살.책':
        iconName = focused
          ? 'library'
          : 'library-outline'; 
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: '#FBEAEB',
  inactiveTintColor: '#2f3c7e',
  activeBackgroundColor: '#2f3c7e',
  inactiveBackgroundColor: '#FBEAEB'
}

export default function Main() {

  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "FETCH_LISTS"})
  }, [])

  if(alert.isShow) {
    Alert.alert(
      "Errors",
      alert.msg,
      [
        { text: "OK", onPress: () => dispatch({type:"CLOSE_ALERT"})}
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {

    messaging().getToken()
    .then(token => {
      console.log("--token--");
      console.log(token);
    }); 

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="마음산.책" component={JournalStackScreen}/>
            <Tab.Screen name="마음살.책" component={ListStackScreen}/>
            <Tab.Screen name="검색" component={SearchStackScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
