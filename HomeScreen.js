import React from "react";
import {View, Text} from "react-native"
import { AntDesign } from '@expo/vector-icons';


const HomeScreen = () =>{
  return(
    <>
          <View style={{backgroundColor:'#d0fff4', height:'100%'}}>
              <View style={{width:'60%', alignSelf:'center',marginTop:100}}>
                  <Text style={{fontSize:25, fontStyle:"normal",fontWeight:700}}>Hey,</Text>
                  <Text style={{fontSize:20, fontStyle:"normal",fontWeight:500}}>Kenneth</Text>
                  <Text>Please select your preffered action</Text>
              </View>
 


              <View style={{display:'flex', flexDirection:"row", justifyContent:"space-around", marginTop:40, }}>
                  <View style={{width:150,height:200,borderRadius:15,padding:10, backgroundColor:'#00935a'}}>
                  <AntDesign style={{alignSelf:'center'}} name="login" size={100} color="black" />
                     
                      <Text  style={{padding:20, textAlign:'center', fontWeight:'bold'}}>Clock In</Text>
                  </View>
                  <View style={{width:150,height:200,borderRadius:15,padding:10, backgroundColor:'#ff5574'}}>
                  <AntDesign style={{alignSelf:'center'}} name="logout" size={100} color="black" />
                     
                      <Text  style={{padding:20, textAlign:'center', fontWeight:'bold'}}>Clock Out</Text>
                  </View>
                 
                
              </View>
              
          </View>
   
    </>
  )
}

export default HomeScreen;