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

  const deleteCharacter =(name, url)=>{
    const localStorageData =getLocalStorageData("charactersData");
    const newCharacterList =localStorageData[url].results.filter(character=>character.name !== name) 
    localStorageData[url].results = newCharacterList
    if(state.isFavoriteShow){
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
    setLocalStorageData("charactersData",url,localStorageData[url])
  }

  const addOrRemoveFavorite=(index,url)=>{
    const {characters} =state
    characters[index].isFavorite=!characters[index].isFavorite
    const localStorageData =getLocalStorageData("charactersData");
    localStorageData[url].results = characters
    setState({
      ...state,
      characters,
    });
    setLocalStorageData("charactersData",url,localStorageData[url])
  }

  const showFavorite=(url)=> {
    const localStorageData =getLocalStorageData("charactersData");
    const {isFavoriteShow} =state
    let newCharacterList=null

    if(!isFavoriteShow){
      newCharacterList =localStorageData[url].results.filter(character=>character.isFavorite === true)
      setState({
        ...state,
        isFavoriteShow:true,
        characters:newCharacterList,
      })
    }else{
      newCharacterList =localStorageData[url].results
      setState({
        ...state,
        isFavoriteShow:false,
        characters:newCharacterList,
      })
    }
  }
  const modifyCharacter=(index,characterNewInfo)=>{
    const localStorageData =getLocalStorageData("charactersData");
    localStorageData[state.currentUrl].results[index]=characterNewInfo
    setLocalStorageData("charactersData",state.currentUrl,localStorageData[state.currentUrl])
    setState({
      ...state,
      characters:localStorageData[state.currentUrl].results,
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



