import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate=useNavigate();
  const [user, setUser]=useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handleChange=e=>{
   
    const {name, value}=e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const register=(e)=>{
    e.preventDefault();
    const{name,email,password}=user;
    if(name && email && password){

      axios.post('http://localhost:9000/register',user)
      .then(res=>{console.log(res)});
    }
    else{
      alert("invalid input")
    }

  }
  return (
    <div className='login_page'>
    <div className='form-container'>
  <form>
  <div className="row mb-3">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name="name" value={user.name} className="form-control" id="inputName3" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name="email" value={user.email} className="form-control" id="inputEmail3" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" name="password" value={user.password} className="form-control" id="inputPassword3" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Re-enter Password</label>
    <div className="col-sm-10">
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} className="form-control" id="inputPassword4" onChange={handleChange}/>
    </div>
  </div>

  <div className='form_buttons'>

  <button type="submit" className="btn btn-primary" onClick={(e)=>{register(e);navigate('/login')}}>Register</button>
  or
  <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/login')}}>Login</button>
  </div>
  
</form>
</div>
    </div>
  )
}
