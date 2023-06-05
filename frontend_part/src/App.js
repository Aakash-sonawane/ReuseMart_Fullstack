// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './components/header/header';

function App() {
  const[userData,setuserData]=useState([]);
  useEffect(()=>{
    fetchdata();
  },[]);
  const fetchdata=async()=>{
    const response= await axios.get('http://localhost:9000/users')
    setuserData(response.data);
    // console.log(response)
  }
  console.log("userData is",userData)
  return (
    <div className="App">
      <Header/>
      <h1>frontend part</h1>
    </div>
  );
}

export default App;
