import { useState } from 'react'
import HomePage from './components/homepage'
import Textgen from './components/textgen'
import './App.css'

import { Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/textgen" element={<Textgen />} />
    </Routes>
    </>
  )
}

export default App
