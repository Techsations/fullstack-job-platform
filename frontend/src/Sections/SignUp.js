import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = () =>{
    // Post request

    const navigate = useNavigate()
  const onSubmit = (values) => {
    axios.post("http://localhost:1010/create", values).then((res)=>{
        console.log(res);
        navigate('/login')
    }).catch((err)=>{
        console.log(err);
    })
  };

    return (
         <>
            <div className='mx-auto container row'>
                <div className='col-sm-8 shadow-lg p-5 mx-auto'>
                    <h6 className='text-muted display-6 text-center'>Sign UP</h6>
                    <input placeholder='User name' type="text" className=" my-2 form-control w-100" onChange={(e) => { setUserName(e.target.value) }} />
                    <input placeholder='Email' type="text" className=" my-2 form-control w-100" onChange={(e) => { setEmail(e.target.value) }} />
                    <input placeholder='Password' type="text" className=" my-2 form-control w-100" onChange={(e) => { setPassword(e.target.value) }} />
                    <button className=' my-2 btn btn-dark' onClick={register}>Submit</button>
                </div>
            </div>
        </>
    )
}