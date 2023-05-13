import { useEffect, useState } from 'react'
import axios from "axios"


function Breed() {
  const [list, setList] = useState([])

 
   useEffect(() => {
    axios.get("http://localhost:3000/list")
    .then((result) => {
      let data = result.data
      console.log(data)
      setList(Object.entries(data))
    })
    .catch((err) => {
      console.log(err)
    })
   },[])
  

  console.log(list)
  

  return (
    <>
    <select>
      <option selected disabled>Select the breed</option>
      { list ? list.map((item, index) => (
        <option key={index}>{item}</option>
      )) : " "}
      </select>
    </>
  )
}

export default Breed