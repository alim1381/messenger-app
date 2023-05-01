import React , { useState , useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import {getRedirectResult ,getAuth} from 'firebase/auth'


export const AuthContext = React.createContext();

export default function UserContextProvider({children}) {

    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState([]);
    const history = useNavigate();

    useEffect (() => {
        const local =window.localStorage.getItem("user");
        let arry ;
        if (local === null) {
            const auth = getAuth();
            getRedirectResult(auth)
                .then((result) => {
                    // console.log(result);
                    setUser(result.user)
                    window.localStorage.setItem("user" , JSON.stringify(result));
                    
                    setLoading(false)
                    if (user) history('/chat')
                
    
                // console.log(user);
                })
                .catch((error) => {
                    setLoading(false)
                    // console.log(error);
                    if (user) history("/")
                });
        } else {
            arry = JSON.parse(local)
            setUser(arry.user)
            setLoading(false)
            if (user) history('/chat')
        }
        

    } , [])
  return (
    <AuthContext.Provider value={user}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
