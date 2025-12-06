import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App