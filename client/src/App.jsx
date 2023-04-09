import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SignIn from  './pages/Authentication/SignIn'
import AddItems from './pages/AddItems'

const App = () => {
  const [loading, setLoading] = useState(true)

  const preloader = document.getElementById('preloader')

  if(preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          <Route path='/additems' element={<AddItems />} />
        </Routes>
      </>
    )
  )
}

export default App
