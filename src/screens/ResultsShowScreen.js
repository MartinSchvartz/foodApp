import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,Image,FlatList} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) =>{
  const [result,setResult] = useState(null);
  const restaurantId = navigation.getParam('id');

  const getResult = async (id) =>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }
  useEffect(()=>{
    getResult(restaurantId);
  },[])
  if(!result){
    return null;
  }
  return (
    <View>
      <FlatList
        data={result.photos}
        horizontal
        keyExtractor={photo=>photo}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
                  return(
                    <View style={styles.viewStyle}>
                      <Image style = {styles.imageView} source={{uri:item}}/>
                    </View>
                  )
                }}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>Location: {result.location.address1}</Text>
      <Text style={styles.details}>Phone number: {result.display_phone}</Text>
      <Text style={styles.details}>Price: {result.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageView:{
    height:200,
    width:300,
    borderRadius:4,
    marginBottom:20
  },
  viewStyle:{
    marginLeft:15,
    marginTop:15,
  },
  name:{
    fontWeight:'bold',
    fontSize:32,
    marginBottom:20

  },
  details:{
    fontWeight:"700",
    fontSize:24,
    marginBottom:15
  }
})

export default ResultsShowScreen
