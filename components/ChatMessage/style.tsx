import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles =StyleSheet.create({
 container:{
 padding:10,
 
 },
 messageBox:{

     borderRadius:5, 
     padding:10,
     width:'80%',
     
 },
 name:{
    color:Colors.light.tint,
    fontWeight:'bold',
    marginBottom:5
 },
 message:{
 
 },
 time:{
     alignItems:'flex-end',
     color:'grey'
 }
 
});
export default styles;