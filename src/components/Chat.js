import React , { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/User.Context.Provider'
import Navbar from './Navbar';
import { ChatEngine } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './shared/Loader';

export default function Chat() {

    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);

    useEffect(() => {
        if (!user) {
          navigate("/")
          return;
        }
        const local =window.localStorage.getItem("user");
        if (local === null) {
          const url = `https://api.chatengine.io/users/`;
          const getConfig = {
            headers : {
              "PRIVATE-KEY": "8dfbc699-c052-4ab2-aff5-ad61362853d3",
              // "secret" : user.uid,
              // "email" : user.email
            }
          }
          const gettData = {
            "username": user.email,
            "secret": user.uid,
            "email": user.email,
            "first_name": user.displayName.split(" ")[0],
            "last_name": user.displayName.split(" ")[1],
            "avatar" : null
          }
          axios.get(url , getConfig)
            .then((res) => {
              // console.log(res.data[0].email);
              const data = res.data;
              data.map(e => {
                if (e.email === user.email) {
                  setLoading(false)
                }
              })
              if (loading === true) {
                axios.post(url , gettData , getConfig)
                .then((res) => {
                  // console.log(res);
                  setLoading(false)
                })  
              }
            })

        } else {
          setLoading(false)
        }
    } , [])

    const getFile = async (url) => {
      const res = await fetch(url);
      const data = await res.blob();
      return new File([data] , "userPhoto.jpg" , {type: "image/jpeg"});
    }

    if (!user || loading) return <Loader />
  return (
    <div>
      <Navbar userName={user.displayName} />
      <ChatEngine
        height='calc(100vh - 70px)'
        projectID='22bc4a7a-4fe3-406e-a7c5-c2b0a07d73a8'
        userName={user.email}
        userSecret={user.uid}
		  />
    </div>
  )
}
