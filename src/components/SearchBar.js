import React from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar  = ({term,onTermChange,onTermSubmit}) =>{
  return(
    <View style={styles.viewBackground}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        autoCapitalize="none"
        autoCorrect = {false}
        clearButtonMode = 'always'
        onChangeText = {onTermChange}
        onEndEditing={onTermSubmit}

      />
    </View>

  );
};
const styles = StyleSheet.create({
  viewBackground:{
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    marginTop:10,
    flexDirection:'row',
    marginBottom:10
  },
  inputStyle:{
    flex:1,
    fontSize:16
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:10

  }
})

export default SearchBar;
