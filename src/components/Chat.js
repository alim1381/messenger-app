import React , { useContext } from 'react'
import { AuthContext } from '../contexts/User.Context.Provider'

export default function Chat() {
    const context = useContext(AuthContext);
    console.log(context);
  return (
    <div>Chat</div>
  )
}
