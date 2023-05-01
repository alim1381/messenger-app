import React from 'react'
import styles from '../styles/Navbar.module.css'
import { useNavigate } from 'react-router-dom';
export default function Navbar({userName}) {
  const navigate = useNavigate();
  const singOutHandler = () => {
    window.localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <div className={styles.container}>
        <div className={styles.divLeft}>
            <h2>Sou Online</h2>
            <span>{userName}</span>
        </div>
        <button onClick={singOutHandler}>Sing Out</button>
    </div>
  )
}
