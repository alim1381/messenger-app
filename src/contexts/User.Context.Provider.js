import React , { useState , useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import {getRedirectResult ,getAuth} from 'firebase/auth'


export const AuthContext = React.createContext();

export default function UserContextProvider({children}) {

    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState([]);
    const history = useNavigate();

    useEffect (() => {
        const auth = getAuth();
        getRedirectResult(auth)
            .then((result) => {
                // console.log(result);
                setUser(result.user)
                
                setLoading(false)
                if (user) history('/chat')
            

            // console.log(user);
            })
            .catch((error) => {
                setLoading(false)
                // console.log(error);
                if (user) history("/")
            });
        

    } , [])
  return (
    <AuthContext.Provider value={user}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
