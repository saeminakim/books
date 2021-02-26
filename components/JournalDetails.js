import React from 'react';
import { ImageBackground, Text, ScrollView, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from '../style/style';

const JournalDetails = ({navigation, route}) => {

  const image = { uri: "https://helloimlily-vueapp.s3.ap-northeast-2.amazonaws.com/notepad_nobg.png" };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground source={image} style={styles.image}> 
        <Text style={{ margin: 30, fontSize:17 }}>{route.params.post}</Text>
          <Button 
            onPress={() => navigation.navigate('AddJournal')}
            icon={<Icon name='reader-outline' type='ionicon' color='#2F3C7E' />}
            title='  독서노트'
            type='clear'
            titleStyle={{color: '#2F3C7E'}}
          />
      </ImageBackground>
    </View>
  );
}

export default JournalDetails;