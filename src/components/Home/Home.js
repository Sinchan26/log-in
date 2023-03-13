import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
        <div>
        <h1>
        <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
        <Link to="/register">Register</Link>
        </h1>
        </div>
        <br />
        <h1>{props.name ? `Welcome: ${props.name}` : "Please Login/register"}</h1>
    </div>
    
  )
}

export default Home