/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome,FontAwesome5,Fontisto, MaterialIcons, Octicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TransactionScreen from '../screens/TransactionScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { transformAsync } from '@babel/core';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.light.tint,
      
     },
     headerTintColor:Colors.light.background,
     headerTitleAlign:'left',
     headerTitleStyle:{
       fontWeight:'bold',
     }
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{
        title:'WeShare',
        headerRight: () => {
          return <View style={{flexDirection: 'row', width: 60 ,justifyContent:'space-between', marginRight: 10, }}>
            <Octicons name="search" size={22} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}  />
          </View>;
        }
    }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({route}) =>({ title: route.params.name,
      headerRight: () =>{
        <View style={{flexDirection: 'row', width: 60 ,justifyContent:'space-between', marginRight: 10, }}>
          <MaterialIcons name="call" size={22} color={'white'} />
          <FontAwesome5 name="video" size={22} color={'white'}/>
          <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
        </View>
      }
      
      })} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createMaterialTopTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
  tabBarStyle:{
    backgroundColor:Colors[colorScheme].tint,
  },
  tabBarIndicatorStyle:{
    backgroundColor: Colors[colorScheme].background,
    height: 5,
  },
  // tabBarLabel:{
  //    fontWeight:'bold'
  // }
  
      }}>
     
      <BottomTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: 'WePay',
          tabBarIcon: ({ color }) => <TabBarIcon name="phone" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Chats"
        component={ChatScreen}
        options={({ navigation }: RootTabScreenProps<'Chats'>) => ({
          title: 'WeConnect',
          tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
         <BottomTab.Screen
        name="Transactions"
        component={TransactionScreen}
        options={{
          title: 'WeCare',
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
