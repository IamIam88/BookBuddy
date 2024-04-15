/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom"

function Nav() {  
    return (
      <>
        <div className="navContainer">
          <Link to ="/books">Books</Link>
          <Link to ="/Login">Login</Link>
          <Link to ="/register">Register</Link>
          <Link to ="/userAccount">View My Details</Link>
        </div>
      </>
    )
  }
  
  export default Nav
//   <Route path = {'/books'} element={<AllBooks/>}/>
//   <Route path = {'/login'} element={<Login/>}/>
//   <Route path = {'/register'} element={<Register/>}/>
//   <Route path = {'/books/:id'} element={<SingleBook/>}/>
//   <Route path = {'/users/:id'} element={<UserAccount/>}/>