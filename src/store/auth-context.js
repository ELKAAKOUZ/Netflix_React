import React,{useState} from "react";
const AuthContext=React.createContext({
    token:'',
    isLoggedIn :false,
    login:(token)=>{},
    logout:()=>{}
});
export default AuthContext;

export const AuthContextProvider = props =>{
    const initialToken=localStorage.getItem('token')
    const [token,setToken]=useState(initialToken);
    const userIsLoggedIn=!!token;
    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token);
    };
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
    };

    const context ={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    };
    return(
        <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>
    )
};
