import React from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";

const getSum = (a,b,c)=>{
    return a+b+c;
  };
  
  const MyCustomComp1 = () => {
      return (<View>
      <Text style={myStyle1.myText1}>Your Sum is - </Text>
    <Text style={myStyle1.myText2}>{getSum(2,4,87)}</Text>
    <TextInput style={myStyle2.myTextInput1}></TextInput>
    </View>)
  };
  
  const myStyle1 = StyleSheet.create({
    myText1:{color:"red", fontSize:30,},
    myText2:{color:"pink", fontSize:50,},
  });
  
  const myStyle2 = StyleSheet.create({
    myTextInput1:{
      borderColor:"black",
      fontSize:40,
      borderWidth:3,
      color:"red",
      padding:30,
      margin:30,
    }
  });

  export default MyCustomComp1;