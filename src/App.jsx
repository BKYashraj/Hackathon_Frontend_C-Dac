import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/register'


function App() {
  return (
    <Routes>
     
        <Route path="/login" element={<Login />} />
      
      
        <Route path="/register" element={<Register />} />
     
    </Routes>
  )
}

export default App
