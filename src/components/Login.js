import React from 'react'

// Icons
import googleLogo from '../assets/icons/Google__G__Logo.svg.png';
// Styles
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2>Welcome To Sou Online!</h2>
        <div className={styles.button}>
          <img src={googleLogo} alt="Google" /> Sing in With Google
        </div>
      </div>
    </div>
  )
}