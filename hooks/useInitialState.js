import { useState,useEffect } from 'react';
import axios from 'axios';

const getLocalStorageData=(key)=>{
   try{
    const localStorageData = JSON.parse(localStorage.getItem(key))
    return localStorageData
   }catch(e){
     return false
   }
 }
 const setLocalStorageData=(key,url,data)=>{
   try{
    const localStorageData = JSON.parse(localStorage.getItem(key))
    localStorage.setItem("charactersData", JSON.stringify({...localStorageData,[url]:data}));
   }catch(e){
     // eslint-disable-next-line no-console
     console.error(e)
   }
 }


const useInitialState = () => {
  
  const [state, setState] = useState({
    characters:[],
    next:null,
    previous:null,
    isFavoriteShow:false,
    currentUrl:''
  });
  
  const URL = "https://swapi.dev/api/people";
 
  useEffect(() => { 
    const localStorageData = getLocalStorageData("charactersData")
    if(!localStorageData){
      axios.get(URL).then(({data}) => {
        const {results,next,previous} =data;
        setState({
          ...state,
          characters:results,
          next, 
          previous,
          currentUrl:URL
        });
        setLocalStorageData("charactersData",URL,data)
      });
    }else{
       const {results,next,previous} =localStorageData[URL];
        setState({
          ...state,
          characters:results,
          next, 
          previous,
          currentUrl:URL
        });
    }
  }, []);
    
  const pagination = async(url) => {
    const localStorageData = getLocalStorageData("charactersData")
    
    if(! localStorageData[url]){
      const {data} = await  axios.get(url)
      const {results,next,previous} =data

      setState({
        ...state,
        characters:results,
        next, 
        previous,
        currentUrl:url
      });
      setLocalStorageData("charactersData",url,data)
    }else{
      const {results,next,previous} =localStorageData[url]

      setState({
        ...state,
        characters:results,
        next, 
        previous,
        currentUrl:url
      });
    }
  };

  const deleteCharacter =(payload,url)=>{
    const {characters} =state
    const newCharacterList =characters.filter(character=>character.name !== payload)
    const localStorageData =getLocalStorageData("charactersData");
    localStorageData.results = newCharacterList
    setState({
      ...state,
      characters:newCharacterList,
    });
    setLocalStorageData("charactersData",url,localStorageData)
  }

  const addOrRemoveFavorite=(payload)=>{
    const {characters} =state
    characters[payload].isFavorite=!characters[payload].isFavorite
    setState({
      ...state,
      characters,
    });
  }
  const showFavorite=()=> {
    const {characters, isFavoriteShow} =state
    let newCharacterList=null
    if(!isFavoriteShow){
      newCharacterList =characters.filter(character=>character.isFavorite === true)
    }else{
      newCharacterList =characters.filter(character=>character.isFavorite === false)
    }
    setState({
      ...state,
      characters:newCharacterList,
    });
  }

  return {
    state,
    pagination,
    deleteCharacter,
    addOrRemoveFavorite,
    showFavorite
  };

};
export default useInitialState;



