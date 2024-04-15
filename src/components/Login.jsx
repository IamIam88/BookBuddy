import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ✅TODO - add your code to create a functional React component that renders a login form ✅*/
function Login({setToken}) { 
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
    async function handleSubmit(e){
      e.preventDefault()
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
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
        <h1>Login Page</h1>
      <form onSubmit = {(e)=>handleSubmit(e)}>
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
    
    export default Login