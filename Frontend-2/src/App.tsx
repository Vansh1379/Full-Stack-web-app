import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import './App.css'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Product } from './pages/Product'
import { ProductId } from './pages/ProductId'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='product' element={<Product />} />
          <Route path='/product/:id' element={<ProductId />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
