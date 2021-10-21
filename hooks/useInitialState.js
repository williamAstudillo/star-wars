import { useState,useEffect } from 'react';
import axios from 'axios'

const useInitialState = () => {

  const [state, setState] = useState({
    results:[],
    next:null,
    previous:null,
  });

  const URL = "https://swapi.dev/api/people";
    useEffect(() => {
        axios.get(URL).then(({data}) => {
          const {results,next,previous} =data;
          setState({
            ...state,
            results,
            next, 
            previous
          });
        });
  }, []);

  const pagination = async(payload) => {
    const {data} = await  axios.get(payload)
    const {results,next,previous} =data
    setState({
      ...state,
      results,
      next, 
      previous
    });
  };

  const deleteCharacter =(payload)=>{
    const {results:characters} =state
    const newCharacterList =characters.filter(character=>character.name !== payload)
    setState({
      ...state,
      results:newCharacterList,
    });
  }

  return {
    state,
    pagination,
    deleteCharacter
  };

};
export default useInitialState;
