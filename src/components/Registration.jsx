import React, { useState } from 'react'
import './Login.css'
import {FaUser,FaLock,FaEnvelope,FaAddressCard,FaMapMarkerAlt,FaMobileAlt,FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[address,setAddress]=useState("");
  const[city,setCity]=useState("");
  const[phone,setPhone]=useState("");
  const[pinCode,setPinCode]=useState("");
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const [error,setError]=useState({
    name:null,
    email:null,
    address:null,
    city:null,
    phone:null,
    pinCode:null,
    userName:null,
    password:null,
    confirmPassword:null,
  });
  
  const validate = () =>{
    const errors={};
    console.log("ok")

    if (!name || name.length < 2) {
      errors.name = "Name is required and must be at least 2 characters";
    }

    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "Email is required and must be a valid email address";
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      errors.phone =
        "Phone Number is required and must be a valid 10-digit phone number";
    }

    if (!address || address.length < 5) {
      errors.address = "Address is required and must be at least 5 characters";
    }

    if (!city || city.length < 2) {
      errors.city = "City is required and must be at least 2 characters";
    }
    if (!pinCode || !/^\d{6}$/.test(pinCode)) {
      errors.pinCode =
        "Phone Number is required and must be a valid 6-digit pinCode ";
    }

    if (
      !password ||
      password.length < 8 ||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)
    ) {
      errors.password =
        "Password is required and must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one digit";
    }

    if (!confirmPassword || confirmPassword !== password) {
      errors.confirmPassword =
        "Confirm Password is required and must match the Password field";
    }

    return errors;
  };
const handleSubmit = async (e) =>{

  e.preventDefault();

  console.log("fghj")


  const errors = validate();

  if(Object.keys(errors).length > 0){
    console.log("erro",errors)

    setError(errors);
    return;
  }
  try{
    console.log("test")

    const response = await axios.post(
      "https://localhost:7138/api/Master/create-user",
      {
        name,
        email,
        address,
        city,
        phone,
        pinCode,
        userName,
        password,

      }
    );
    navigate("/");
  }catch(err){

    console.log(err)
    setError("Failed to register")
  }
};
 

  return (
   
    <div className='body'>
    <div className='wrapper'>
    <form action='' onSubmit={handleSubmit}>
      <h1>Register Now</h1>
      <div className='input-box'>
        <input form=''  type='text' value={name} onChange={(e) => setName(e.target.value) } placeholder='Name' required /> {error &&  <span className='error'>{error.name}</span>}
        <FaUser className='icon'/>
      </div>
      <div className='input-box'>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email' required />{error &&  <span className='error'>{error.email}</span>}
        <FaEnvelope className='icon'/>
      </div>
      <div className='input-box'>
        <input type='textArea'value={address} onChange={(e) => setAddress(e.target.value)} error={error.address ? {content : error.address , pointing: "above"}:null} placeholder='Address' required />
        <FaAddressCard  className='icon'/>
      </div>
      <div className='input-box'>
        <input type='text' value={city} onChange={(e) => setCity(e.target.value)} error={error.city ? {content : error.city , pointing: "above"}:null} placeholder='City' required />
        <FaMapMarkerAlt className='icon'/>
      </div>
      <div className='input-box'>
        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} error={error.phone ? {content : error.phone , pointing: "above"}:null} placeholder='Phone Number' required />
        <FaMobileAlt className='icon'/>
      </div>
      <div className='input-box'>
        <input type='text' value={pinCode} onChange={(e) => setPinCode(e.target.value)} error={error.pinCode ? {content : error.pinCode , pointing: "above"}:null} placeholder='Pincode' required />
        <FaEdit className='icon'/>
      </div>
      <div className='input-box'>
        <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} error={error.userName ? {content : error.userName , pointing: "above"}:null} placeholder='UserName' required />
        <FaUser className='icon'/>
      </div>
      <div className='input-box'>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} error={error.password ? {content : error.password , pointing: "above"}:null} placeholder='Enter Password' required />
        <FaLock className='icon'/>
      </div>
      <div className='input-box'>
        <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={error.confirmPassword ? {content : error.confirmPassword , pointing: "above"}:null} placeholder='Confirm Password' required />
        <FaLock className='icon'/>
      </div>
      <button type='submit'>Register</button>
    </form>
   </div>
   </div>
  );
};

export default Registration