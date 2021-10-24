import { useState,useEffect } from 'react';
import axios from 'axios';
import {getLocalStorageData,setLocalStorageData} from 'utils/localStorage'

const useInitialState = () => {
  
  const [state, setState] = useState({
    characters:[],
    next:null,
    previous:null,
    isFavoriteShow:false,
    currentUrl:''
  });
  
  const URL = "https://swapi.dev/api/people/?page=1";
 
  useEffect(async () => { 
    const localStorageData = getLocalStorageData("charactersData")
    if(!localStorageData){
      const response = await axios.get(URL);
      const { results,next,previous } = response.data;
        setState({
          ...state,
          characters:results,
          next, 
          previous,
          currentUrl:URL
        });
      setLocalStorageData("charactersData",URL,response.data) 
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

  const deleteCharacter =(name)=>{
    const {currentUrl,isFavoriteShow} =state
    const localStorageData =getLocalStorageData("charactersData");
    const newCharacterList =localStorageData[currentUrl].results.filter(character=>character.name !== name) 
    localStorageData[currentUrl].results = newCharacterList

    if(isFavoriteShow){
      const characterListFilter =newCharacterList.filter(character=>character.isFavorite === true)
      setState({
        ...state,
        characters:characterListFilter,
      });
    }else{
      setState({
        ...state,
        characters:newCharacterList,
      });
    }
    setLocalStorageData("charactersData",currentUrl,localStorageData[currentUrl])
  }

  const addOrRemoveFavorite=(index)=>{
    const {characters,currentUrl} =state
    characters[index].isFavorite=!characters[index].isFavorite
    const localStorageData =getLocalStorageData("charactersData");
    localStorageData[currentUrl].results = characters
    setState({
      ...state,
      characters,
    });
    setLocalStorageData("charactersData",currentUrl,localStorageData[currentUrl])
  }

  const showFavorite=()=> {
    const {currentUrl} = state
    const localStorageData =getLocalStorageData("charactersData");
    const {isFavoriteShow} =state
    let newCharacterList=null

    if(!isFavoriteShow){
      newCharacterList =localStorageData[currentUrl].results.filter(character=>character.isFavorite === true)
      setState({
        ...state,
        isFavoriteShow:true,
        characters:newCharacterList,
      })
    }else{
      newCharacterList =localStorageData[currentUrl].results
      setState({
        ...state,
        isFavoriteShow:false,
        characters:newCharacterList,
      })
    }
  }
  const modifyCharacter=(index,characterNewInfo)=>{
    const {currentUrl}= state
    const localStorageData =getLocalStorageData("charactersData");
    localStorageData[currentUrl].results[index]=characterNewInfo
    setLocalStorageData("charactersData",currentUrl,localStorageData[currentUrl])
    setState({
      ...state,
      characters:localStorageData[currentUrl].results,
    });
  }

  return {
    state,
    pagination,
    deleteCharacter,
    addOrRemoveFavorite,
    showFavorite,
    modifyCharacter
  };

};
export default useInitialState;



