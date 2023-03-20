import React from "react";
import {Text, StyleSheet, View, TextInput, Button} from "react-native";
import { useState } from "react";
// import MyCustomComp1 from "./src/custom-component/Custom";


const MyStudentData = (props) =>{
  return (
    <View>
      <Text style={myStyle1.myText1}>Name - {props.name}</Text>
      <Text style={myStyle1.myText2}>Roll No. - {props.roll}</Text>
      <Text style={myStyle1.myText3}>Gender : {props.gen}</Text>

    </View>
  );
};




const App = ()=>{
  let [currValue,setincreamentvalue] = useState(0)

  const IncreaseValue = ()=>{
    currValue = currValue + 1;
    setincreamentvalue(currValue);
  }
  const ClearValue = () =>{
    currValue = 0;
    setincreamentvalue(currValue);
  }
  return <View style={myStyle1.myviewstyle}>
    {/* <MyStudentData name="LOAL" roll="1" gen="M"/>
    <MyStudentData name="WOW" roll="43" gen="F"/>
    <MyStudentData name="DFJFSF" roll="90" gen="F"/> */}

    <Text style={myStyle1.myText1}>{currValue}</Text>
    <Button onPress={()=>{IncreaseValue()}} style={myStyle1.mybtn} title="Click Here"/>
    <Button title="clear all" onPress={()=>{ClearValue()}}/>
  </View>
}

const myStyle1 = StyleSheet.create({
  myText1:{color:"red", fontSize:30, paddingTop:50},
  mybtn:{margin:30},
  myviewstyle:{backgroundColor:"yellow",flex:1, flexDirection:"column",justifyContent:"center", alignItems:"center"}
}
);


export default App;