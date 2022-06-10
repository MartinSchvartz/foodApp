import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

const ResultsDetail = ({result},navigation) =>{
  return (
    <View
      style={styles.viewStyle}
    >
      <Image
        style={styles.image}
        source = {{uri: result.image_url}}
      />
      <Text style = {styles.name}>{result.name} </Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width:250,
    borderRadius:4,
    height:125,
    marginBottom:5
  },
  name:{
    fontWeight:'bold',

  },
  viewStyle:{
    marginLeft:15
  }
});

export default ResultsDetail
