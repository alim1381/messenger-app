import React from 'react'
import { getAuth , signInWithRedirect , GoogleAuthProvider } from 'firebase/auth';
import {app} from '../firebase';

// Icons
import googleLogo from '../assets/icons/Google__G__Logo.svg.png';
// Styles
import styles from '../styles/Login.module.css';

export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

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