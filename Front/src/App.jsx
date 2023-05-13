import React from 'react'
import Random from './Random.jsx'
import Breed from './Breed.jsx'
import {BrowserRouter , Routes , Route} from "react-router-dom"
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Random/>}/>
        <Route path='/breed' element={<Breed/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App