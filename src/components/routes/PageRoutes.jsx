import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../../pages/AuthPage/AuthPage'
import Landing from '../../pages/Landing/Landing'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/authPage" element={<AuthPage />} />
    </Routes>
  )
}

export default PageRoutes