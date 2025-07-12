import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../../pages/AuthPage/AuthPage'
import Landing from '../../pages/Landing/Landing'
import MessageShore from '../../pages/MessageShore/MessageShore'
import Profile from '../../pages/Profile/Profile'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/authPage" element={<AuthPage />} />
      <Route path="/messageShore" element={<MessageShore />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default PageRoutes