import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Desserts from './pages/Desserts'
import Root from './layout/Root'
import NoPage from './pages/NoPage'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} >
          <Route index element={<Desserts />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
