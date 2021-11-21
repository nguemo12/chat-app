import React from "react";
import {Text, FlatList, ImageBackground} from 'react-native';
import { useRoute } from "@react-navigation/native";
import chatRoomData from '../components/data/Chats';
import ChatMessage from "../components/ChatMessage";
import { View } from "react-native";
import InputBox from "../components/inputBox"
import { Asset } from "expo-asset";
const ChatRoomScreen =() =>{
    const route =useRoute();
    // console.log(route.params)
    return ( 
      <ImageBackground style={{width:'100%', height:'100%'}} source={Asset} >
        <View style={{flex:1, backgroundColor:'white'}}> 
      <FlatList 
      data={chatRoomData.messages}
      renderItem={({item})=> <ChatMessage message={item}/>}
  inverted
  />
      </View>
      <InputBox />
      </ImageBackground>
    );
}

export default ChatRoomScreen;