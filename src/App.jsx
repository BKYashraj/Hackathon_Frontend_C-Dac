import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/register'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
