import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
const NewTransactionButton = () =>{
    return (
        <View style={styles.container}>
<MaterialCommunityIcons
name="cash"
size={28}
color="white"/>
        </View>
    )
}

export default NewTransactionButton;