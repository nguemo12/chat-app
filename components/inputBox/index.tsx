import React, { useState } from "react";
import { View,Text, TextInput } from "react-native";
import styles from "./styles";
import{MaterialCommunityIcons,Fontisto, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
const InputBox=() =>{
    const [message,setMessage] =useState('');

    return(
        <View style={styles.container}>
           
            <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey"  />
            <TextInput 
            placeholder={"Type a Message..."}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
           
            />
            <FontAwesome5 name="paperclipc" size={24} color="grey" style={styles.icons}/>
            {!message &&<Fontisto name="camera" size={24} color="grey" style={styles.icons}/>}
            </View>
            <View style={styles.buttonContainer}>
                {!message
                ?<MaterialCommunityIcons name="microphone" size={24} color="white"/>
                :<MaterialIcons name="send" size={28} color="white"/>
                }
            </View>
        </View>
    )
}
 
export default InputBox;