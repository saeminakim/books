import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../style/style';

// 독서노트 있으면 있는 화면 보여주고
// 없으면 createJournal로 넘어가게 구현해야 함ㅜㅜㅜ

const JournalDetails = ({ route, navigation }) => {

  console.log(route);

  const [text, setText] = useState('');

  return (
    <View>
    <Button title='독서노트 남기기' />
    <Text> {route.params?.text}</Text>


    </View>
  );
}

// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }

export default JournalDetails;