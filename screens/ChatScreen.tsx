import * as React from 'react';
import { FlatList,StyleSheet } from 'react-native';

import ChatListItems from '../components/chatListItems';
import {View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRooms from '../components/data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList 
      style={{width: '100%'}}
      data={ChatRooms}
      renderItem={({item}) => <ChatListItems chatRoom={item}/>}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
