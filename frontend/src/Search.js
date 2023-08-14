import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './asset/form.css'

export default function Search({user_id}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
      input:'',
      srch:0
  })
  const [result, setResult] = useState(null)
  const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
  const onSubmit = e =>{
    e.preventDefault()
    const numberArray = formData.input.split(",").map(Number);
    numberArray.sort((a, b) => b - a);
    const arrayAsString = numberArray.join(', ');
    axios.defaults.headers = {
      'Content-type':'application/json'
    };
    axios.post('http://localhost:8000/section2/save/',{"user":user_id,"text":arrayAsString})
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    console.log(numberArray)
    console.log(formData.srch)
    if (numberArray.includes(parseInt(formData.srch))){
      setResult("True")
    }
    else{
      setResult("False")
    }
    
  }
  function handleClick(){
    localStorage.removeItem("access")
    navigate("/")
  }

  
  return (
    
    <div>
        
        <form className='custom-form' onSubmit={e=>onSubmit(e)}>
          <h2>Search</h2>
            <input type="text" name='input' placeholder='Input values' onChange={e=>onChange(e)}/>
            <input type="number" name='srch' placeholder='Search Value' onChange={e=>onChange(e)}/>
            <button>Khoj</button><br/>
            <label>Result: </label>{result}
              
        </form>
        <div className='logout'>
          <button  onClick={() => handleClick()}>Logout</button>
        </div>
        
    </div>
  )
}
