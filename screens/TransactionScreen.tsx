import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import {Pressable, StyleSheet } from 'react-native';
import NewTransactionButton from '../components/NewTransactionButton';
import { View } from '../components/Themed';
const onClick =()=>{

}
export default function TransactionScreen() {
  return (
    <View style={styles.background}>      
      <Pressable onPress={onClick}>
    <MaterialCommunityIcons name="plus-box" size={100} color={'red'} />
    <MaterialCommunityIcons name="hand-heart" size={100} color={'green'}/>
    <MaterialCommunityIcons  name="cash" size={100} color={'blue'}/>
    </Pressable>
    <View style={styles.container}>
<NewTransactionButton />

    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
