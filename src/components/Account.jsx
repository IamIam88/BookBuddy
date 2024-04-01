import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

/* add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.*/

function UserAccount({token}) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.error(error)
      }
    }

    if (token) {
      fetchUser()
    }
  }, [token])

  return (
    <>
      <h1>User Details Page</h1>
      {!token && <Navigate to="/Login" replace={true} />}
      {token && user && (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      {token && !user && <p>Loading user data...</p>}
    </>
  )
}

export default UserAccount

