import React from 'react'
import { getAuth , signInWithRedirect , getRedirectResult , GoogleAuthProvider } from 'firebase/auth';
import {app} from '../firebase';

// Icons
import googleLogo from '../assets/icons/Google__G__Logo.svg.png';
// Styles
import styles from '../styles/Login.module.css';

export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
     
      console.log(user);
    })

  const clickHandler = () => {
    signInWithRedirect(auth , provider);

  }
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2>Welcome To Sou Online!</h2>
        <div className={styles.button} onClick={clickHandler}>
          <img src={googleLogo} alt="Google" /> Sing in With Google
        </div>
      </div>
    </div>
  )
}