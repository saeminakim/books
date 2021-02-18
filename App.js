import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home'
import JournalList from './components/JournalList'
import Search from './components/Search'
import WishList from './components/WishList'
import WishDetails from './components/WishDetails'
import AddJournal from './components/AddJournal';

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './redux/reducers';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const JournalStack = createStackNavigator();
const SearchStack = createStackNavigator();
const WishStack = createStackNavigator();

const store = createStore(rootReducer);

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
      <JournalStack.Screen name="JournalList" component={JournalList} options={{title:"책목록", headerTitleAlign:"center"}}  />
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
      <SearchStack.Screen name="Search" component={Search} options={{title:"도서 검색", headerTitleAlign:"center"}}  />
    </SearchStack.Navigator>
  )
}
const WishStackScreen = () => {
  return (
    <WishStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2F3C7E',
      },
      headerTintColor: '#FBEAEB',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <WishStack.Screen name="읽을 책" component={WishList} options={{title:"읽고 싶은 책", headerTitleAlign:"center"}}  />
      {/* <WishStack.Screen name="JournalList" component={JournalList} options={{title:"책목록", headerTitleAlign:"center"}}  /> */}
      <WishStack.Screen name="WishDetails" component={WishDetails} options={{title:"읽고 싶은 책", headerTitleAlign:"center"}}  />
    </WishStack.Navigator>
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
      case 'JournalList':
        iconName = focused
          ? 'book'
          : 'book-outline'; 
        break;
      case 'Search':
        iconName = focused
          ? 'search'
          : 'search-outline'; 
        break;
      case '읽을 책':
        iconName = focused
          ? 'bookmark'
          : 'bookmark-outline'; 
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: '#FBEAEB',
  inactiveTintColor: '#2f3c7e',
  activeBackgroundColor: '#2f3c7e',
  inactiveBackgroundColor: '#FBEAEB'
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="JournalList" component={JournalStackScreen}/>
            <Tab.Screen name="읽을 책" component={WishStackScreen}/>
            <Tab.Screen name="Search" component={SearchStackScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
