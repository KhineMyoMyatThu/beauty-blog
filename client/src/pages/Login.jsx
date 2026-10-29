import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [inputs, setInputs] = useState({
    email : "",
    password: ""
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate() ;//useNavigate is a hook that allows you to programmatically navigate to different routes in your application. It is part of the React Router library and is commonly used in React applications for handling navigation between different pages or components.

  const handleChange = e => {
    setInputs(prev =>({...prev,[e.target.name] : e.target.value}))
  }


  const handleSubmit = async e => {
    e.preventDefault() ;//ser agent that the event is being explicitly handled, so its default action, such as page scrolling, link navigation, or pasting text, should not be taken.
    try{
     await axios.post(
      "/api/auth/login",
      inputs,
      { withCredentials: true }
    );

      navigate("/");  //redirects the user to the home page after a successful login.
    
    }catch(err){
      setError(err.response?.data || err.message || "Login failed");
    }
   
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="w-[400px] bg-white px-10 py-8 shadow-sm">
        
        {/* Title */}
        <h2 className="text-center text-pink-500 font-semibold text-lg mb-4">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

           {/* Email */}
          <div>
            <input required type="email" placeholder="youremail@example.com" name = 'email'  onChange={handleChange} className=" w-full border-b border-gray-40 outline-none text-sm py-2 placeholder-gray-400 focus:border-[#087f83]
              "
            />
          </div>

          {/* Password */}
          <div>
            <input required type="password" placeholder="password" name="password" onChange={handleChange} className=" w-full  border-b border-gray-400 outline-none text-sm py-2 placeholder-gray-400 focus:border-pink-500"/>
          </div>


          {/* Button */}
          <button type="submit" className="w-full bg-pink-500 text-white text-sm py-2 hover:bg-pink-600 transition ">
            Login
          </button>

         {err && <p className='text-center my-5 text-red-500 text-sm'>{err}</p>}
        </form>
        {/* Error message */}

        {/* Register */}
        
        <p className="text-center text-xs mt-5 text-gray-700">
          Don't you have an account?
          <Link to="/register" className="text-purple-700 underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;