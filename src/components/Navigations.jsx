/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet.  */

import { Link } from "react-router-dom"

function Nav() {  

  const isLoggedIn = false;

  return (
    <>
      <div>
        <Link to="/books">Books</Link>
        {isLoggedIn ? null : <Link to="/login">Login</Link>}
        <Link to="/register">Register</Link>
        <Link to="/userAccount">View My Details</Link>
      </div>
    </>
  )
}

export default Nav