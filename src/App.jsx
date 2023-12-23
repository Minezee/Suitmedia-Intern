import { useState } from 'react'
import { Header } from './components'
import { Route, Routes } from 'react-router-dom'
import { Ideas, NotFound } from './pages'

function App() {
  return (
    <div className='w-full'>
      <Header />
      <Routes>
        <Route path="/ideas" element={<Ideas />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
