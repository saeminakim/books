import React from 'react';
import { ImageBackground, Text, ScrollView, View } from 'react-native';
import { Button, Icon, Avatar, Card } from 'react-native-elements';
import { useState } from 'react-redux'
import styles from '../style/style';

const JournalDetails = ({navigation, route}) => {

  const item = route.params;

  return (
    <Card containerStyle={{height: '95%'}}>
      <Card.Title style={styles.title}>{ item.title }</Card.Title>
      <Card.Divider />
        <Text style={{ margin: 30, fontSize:17 }}>{route.params.post}</Text>   
          <Button 
            onPress={() => navigation.navigate('AddJournal')}
            icon={<Icon name='reader-outline' type='ionicon' color='#2F3C7E' />}
            title='  독서노트'
            type='clear'
            titleStyle={{color: '#2F3C7E'}}
          />
    </Card>
  );
}

export default JournalDetails;