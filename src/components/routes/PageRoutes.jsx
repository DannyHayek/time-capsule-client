import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../../pages/auth/AuthPage'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<AuthPage />} />
    </Routes>
  )
}

export default PageRoutes