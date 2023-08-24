import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from '../pages/Main/Main'
import MainLayout from '../layout/MainLayout/MainLayout'
import About from '../pages/About/About'
import Contacts from '../pages/Contacts/Contacts'
import NotFound from '../pages/NotFound/NotFound'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/main" index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
