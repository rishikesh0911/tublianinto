import React,{useContext,useState,createContext} from 'react';

const UserContext=createContext();
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserDetailsProvider=({ children }) => {
    const [user, setUser] = useState({});
    const [preference, setPreference] = useState({});

  const updateUserCredentials = (newValue) => {
  if(newValue){
  setUser((_)=>{return{..._,firstName:newValue.firstName,lastName:newValue.lastName}});
  }
  };
  const updatePreference = (newValue) => {
    if(newValue){
      setPreference((_)=>{return{..._,...newValue}});
    }
    };

    return (
      <UserContext.Provider value={{ user,preference, updateUserCredentials,updatePreference }}>
        {children}
      </UserContext.Provider>
    );
  };