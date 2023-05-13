import React, { useState } from 'react'
import axios from "axios"

function Random() {
  const [image, setImage] = useState('')

  function getImage() {
    axios.get("http://localhost:3000/random")
    .then((result) => {
      console.log(result.data)
      setImage(result.data)
    })
    .catch((err) => {
      console.log(err)
    })

  }


  return (
    <div className='wrapper' >
      {
        image ? 
          <div className='dog'><img src={image}></img></div>
         :" "
      }
      <button onClick={getImage}>Click to get random dog image</button>
    </div>
  )
}

export default Random