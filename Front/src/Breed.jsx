import { useEffect, useState } from 'react'
import axios from "axios"


function Breed() {
  const [list, setList] = useState([])
  const [sublist, setSublist] = useState([])
  const [breed, setBreed] = useState('')


  function getImage() {
    axios.get("http://localhost:3000/breed/" + breed )
      .then((result) => {
        console.log(result)
        // setImage(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


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
  }, [])

  function sublistHandler(e) {
    // setSublist(e.target.value)
    let name = e.target.value
    setBreed(name)
    let sub = list.filter((breed) => {
      if (breed[0] === name) {
        return breed
      }
    })
    setSublist(sub)
  }


  console.log(list)
  console.log(sublist)



  return (
    <>
      <select onChange={(e) => {sublistHandler(e);getImage()}}>
        <option selected disabled >Select the breed</option>
        {list ? list.map((item, index) => (
          <option key={index} value={item[0]}>{item[0]}</option>
        )) : " "}
      </select>
      {/* <select>
        <option selected disabled >Select the sub breed</option>
        {sublist ? sublist.map((item, index) => (
          item[1].map((name, index) => {
            return <option key={index} value={name}>{name}</option>
          })
        )) : " "}
      </select> */}
    </>
  )
}

export default Breed