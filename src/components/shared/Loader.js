import React from 'react'

// Gif
import loadingGif from '../../gifs/loader2.gif'

export default function Loader() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop : "60px",
      padding : "20px"

    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems : "center"
      }}>
        <img src={loadingGif} alt="Loading..." style={{width: "100px"}}/>   
        <h3>Loading...</h3>
      </div>
    </div>
  )
}
