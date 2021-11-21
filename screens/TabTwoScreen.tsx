import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import NewCallButton from '../components/NewCallButton';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     <Text style={styles.Notice}>Your calls are displayed here</Text> 
     <NewCallButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Notice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
