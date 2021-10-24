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
    localStorage.setItem("charactersData", JSON.stringify({...localStorageData,[url]:data,"currentUrl":url}));
   }catch(e){
     // eslint-disable-next-line no-console
     console.error(e)
   }
 }
export {getLocalStorageData,setLocalStorageData}