import React from 'react';
import { ImageBackground, Text, ScrollView, View } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import styles from '../style/style';

const JournalDetails = ({navigation, route}) => {

  const image = { uri: "https://helloimlily-vueapp.s3.ap-northeast-2.amazonaws.com/notepad_nobg.png" };
  const item = route.params;

  return (

    <Card containerStyle={{height: '95%'}}>
      <Card.Title style={styles.title}>{ item.title }</Card.Title>
      <Card.Divider />
      <Text>{route.params.post}</Text>
        <Button 
          onPress={() => navigation.navigate('AddJournal')}
          icon={<Icon name='reader-outline' type='ionicon' color='#2F3C7E' />}
          title='  독서노트'
          type='clear'
          titleStyle={{color: '#2F3C7E'}}
        />
    </Card>

    // <View style={{ flex: 1, justifyContent: 'center' }}>
    //   <ImageBackground source={image} style={styles.image}> 
    //     <Text style={{ margin: 30, fontSize:17 }}>{route.params.post}</Text>
    //       <Button 
    //         onPress={() => navigation.navigate('AddJournal')}
    //         icon={<Icon name='reader-outline' type='ionicon' color='#2F3C7E' />}
    //         title='  독서노트'
    //         type='clear'
    //         titleStyle={{color: '#2F3C7E'}}
    //       />
    //   </ImageBackground>
    // </View>
  );
}

export default JournalDetails;