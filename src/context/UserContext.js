import React,{useContext,useState,createContext} from 'react';

const UserContext=createContext();
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserDetailsProvider=({ children }) => {
    const [user, setUser] = useState({});
  const updateUserCredentials = (newValue) => {
  if(newValue){
  setUser((_)=>{return{..._,firstName:newValue.firstName,lastName:newValue.lastName}});
  }
  };

  
    return (
      <UserContext.Provider value={{ user, updateUserCredentials }}>
        {children}
      </UserContext.Provider>
    );
  };