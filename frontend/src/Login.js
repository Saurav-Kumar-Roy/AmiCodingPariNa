import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './asset/form.css'


export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [msg, setMsg] =  useState('')
    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = e =>{
        e.preventDefault()
        axios.defaults.headers = {
            'Content-type':'application/json'
        };
        axios.post('http://localhost:8000/section1/login/',formData)
        .then(res=>{
            localStorage.setItem('access', res.data.access);
            navigate("/find")
        })
        .catch(err=>{
           setMsg(err.response.data.detail)
           
        })
    }


    return (
        <div>
            <form className="custom-form" onSubmit={e=>onSubmit(e)}>
            <h2>Login</h2>
                <input type="text" name='username' placeholder='userName' onChange={e=>onChange(e)}/><br/>
                <input type='password' name='password' placeholder='password' onChange={e=>onChange(e)}/><br/>
                <div className='buttondiv'><button>login</button></div>
                <p className='small-text'>{msg}</p>
                <p>Don't Have an account? <Link to="/register">register</Link></p>
            </form>
            
        </div>
    )
}
