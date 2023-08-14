import React, { useState } from "react"
import Search from "./Search"
import { Link } from "react-router-dom"
import jwtDecode from 'jwt-decode'

export default function Home() {
  var token  = localStorage.getItem('access') 
  var user = {"id":null}
  if (token !== null)
    user = jwtDecode(token)

  return (
    <div>
     <h2>Welcome to Khoj the search, user id: {user.user_id}</h2>
      {(token !==null)?<Search user_id={user.user_id}/>:<p><Link to="/">Login</Link> to continue</p>}
    </div>
  )
}
