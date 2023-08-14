import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './asset/form.css'

export default function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
      "username":'',
      "password":'',
      "password2":'',
      "email":'',
      "first_name":'',
      "last_name":''
})
const [userErr, setUserErr] = useState('')
const [passErr, setPassErr] =  useState('')
const [emailErr, setEmailErr] =  useState('')
const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
const onSubmit = e =>{
    
    e.preventDefault()
    axios.defaults.headers = {
        'Content-type':'application/json'
    };
    axios.post('http://localhost:8000/section1/register/',formData)
    .then(res=>{
      navigate("/")
    })
    .catch(err=>{
      console.log(formData)
      console.log(err)
       setPassErr(err.response.data.password)
       setUserErr(err.response.data.username)
       setEmailErr("email:"+err.response.data.email)
    })
}


return (
    <div>
      <form className='custom-form' onSubmit={e=>onSubmit(e)}>
        <h2>Register Page</h2>
          <input type="text" name='username' placeholder='User Name' onChange={e=>onChange(e)} required /> <br/>
          <input type="text" name='first_name' placeholder='First Name' onChange={e=>onChange(e)}/> <br/>
          <input type="text" name='last_name' placeholder='Last Name' onChange={e=>onChange(e)}/> <br/>
          <input type="email" name='email' placeholder='Email' onChange={e=>onChange(e)} required/><br/>
          <p className='small-text'>8 charecter or more with number and text.</p>
          <input type='password' name='password' placeholder='Passowrd' onChange={e=>onChange(e)} required/><br/>
          <input type='password' name='password2' placeholder='Confirm Passowrd' onChange={e=>onChange(e)} required/><br/>
          <div className='buttondiv'><button>Register</button></div>
      
      <p className='small-text'>{passErr}, {emailErr}, {userErr}</p>
      <p>Alerdy have an account? <Link to="/">login</Link></p>
      </form>
    </div>
)
}
