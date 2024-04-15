/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.*/

import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

function UserAccount({token}) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const data = await response.json();
        setUser(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };
    
    getUser();
  }, [token]);
  
  return (
    <>
      <h1>User Details Page</h1>
      {!token && <Navigate to="/Login" replace={true} />}
      {token && user && (
        <div>
          <h2>Welcome, {user.firstname} {user.lastname}!</h2>
          <p>Email: {user.email}</p>
          <p>User: {user.id}</p>
          <p>Books: {user.books && user.books.length > 0 ? user.books.map(book => book.title).join(", ") : 'None'}</p>
        </div>
      )}
      {token && !user && <p>Loading account details...</p>}
    </>
  );
}

export default UserAccount;