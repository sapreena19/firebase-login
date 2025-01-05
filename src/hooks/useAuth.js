const{createContext, useContext}=require('react')
const AuthContext=createContext();
export const useAuth=()=>{
    return useContext(AuthContext);
}