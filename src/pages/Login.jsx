import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';     //to send api request to backend
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { setAuth } from '../redux/Slices/AuthSlice'

const Login = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [value,setValue]=useState({
        email:"",
        password:""
    })
    const handleOnChange=(e)=>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit=async (e) => {
        e.preventDefault();
        try {
            const response= await axios.post('https://e-commerce-crud-backend.vercel.app//auth/login', value)
            const datas = response.data
            console.log(datas)
        if (response.status==200){
            toast.success(datas.message)
            dispatch(setAuth(datas.user))
            navigate('/home');
        }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Login failed');
    }
    } 
  return (
    <>
    <section className="h-screen bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center bg-blue-600 rounded p-2 italic mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Aylish  
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleOnSubmit}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={value.email}  onChange={handleOnChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={value.password} onChange={handleOnChange}  name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>

                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onSubmit={handleOnSubmit}>Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login
