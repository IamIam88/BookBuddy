import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AllBooks from './components/Books'
import Login from './components/Login'
import Register from './components/Register'
import SingleBook from './components/SingleBook'
import UserAccount from './components/Account'
import Nav from './components/Navigations'

function App() {
  const [token, setToken] = useState(null)
  const location = useLocation()
  const { basename } = location

  return (
    <>
    <Nav/>
    <Routes basename={basename}>
      <Route path = {'/books'} element={<AllBooks/>}/>
      <Route path = {'/login'} element={<Login setToken={setToken}/>}/>
      <Route path = {'/register'} element={<Register setToken={setToken}/>}/>
      <Route path = {'/books/:id'} element={<SingleBook/>}/>
      <Route path = {'/userAccount'} element={<UserAccount token={token}/>}/>
    </Routes>
    </>
  )
}

export default App
