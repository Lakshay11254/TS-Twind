// import Navbar from './component/Navbar'
// import Login from './component/Login'
import React from 'react'
import Main from './component/Main'
import { Routes,Route } from 'react-router-dom'
import Login from './component/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
