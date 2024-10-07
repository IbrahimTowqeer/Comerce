import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AuthLayout from './components/auth/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col overflow-hidden bg-white s'>

    <h1> Header component</h1>

    <Routes>
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path='login' element={<AuthLogin/>}></Route>
        <Route path='register' element={<AuthRegister/>}></Route>
      </Route>
    </Routes>
    </div>
  )
}

export default App
