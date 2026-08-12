import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './components/Layout/Layout'
import UseEffect from './pages/UseEffect'
import ProductView from './pages/ProductView'
import EditProduct from './pages/EditProduct'

function App() {

  return (
    <>
      {/* <Layout> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/:id' element={<ProductView />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/useeffect' element={<UseEffect />} />
        </Routes>
      {/* </Layout> */}
    </>
  )
}

export default App
