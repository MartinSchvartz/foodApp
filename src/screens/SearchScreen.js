import React,{useState} from "react";
import {View, Text, StyleSheet,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";
const SearchScreen  = () =>{
  const [term,setTerm]=useState('');
  const [searchApi,results,errorMessage] = useRestaurants();
  const filterResultsByPrice = (price ='$') =>{
    // price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(oneResult =>{
      return oneResult.price === price
    })
  }
  return(
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit ={()=>searchApi(term)}
      />
      {errorMessage ? <Text style={{fontSize:24,color:'red'}}>{errorMessage}!!</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective $"/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier $$"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender $$$"/>
      </ScrollView>
    </>

  );
};
const styles = StyleSheet.create({
  background:{
    backgroundColor:'white',
    flex:1
  }
})

export default SearchScreen
