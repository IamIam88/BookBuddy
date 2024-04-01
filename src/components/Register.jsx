import { useState } from "react"
import { useNavigate } from "react-router-dom"

/* #TODO - add your code to create a functional React component that renders a registration form */

function Register({setToken}) {  
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
      })
      })
      const result = await response.json();
      setToken(result.token)
      navigate(`/userAccount`)

  }
  return (
    <>
    <h1>Register Page</h1>
    <form onSubmit = {(e)=>handleSubmit(e)}>
    <label>
      First Name:
      <input
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
    </label>
    <label>
      Last Name:
      <input
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
    </label>
    <label>
      Email:
      <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </label>
    <label>
      Password:
      <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    </label>
    <input value = "Submit" type = "submit"/>
    </form>
    </>
  )
  }
  
  export default Register