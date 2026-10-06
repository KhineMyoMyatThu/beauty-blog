import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username : "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    setInputs(prev =>({...prev,[e.target.name] : e.target.value}))
  }

  const handleSubmit = e => {
    e.preventDefault() //ser agent that the event is being explicitly handled, so its default action, such as page scrolling, link navigation, or pasting text, should not be taken.
  }
   return (
    <div className="min-h-screen flex items-center justify-center bg-[#b7e3e6]">
      <div className="w-[400px] bg-white px-10 py-8 shadow-sm">
        
        {/* Title */}
        <h2 className="text-center text-[#087f83] font-semibold text-lg mb-4">
          Register
        </h2>

        {/* Form */}
        <form className="space-y-5">

          {/* Username */}
          <div>
            <input
              required
              type="text"
              placeholder="username"
              name = 'username'
              onChange={handleChange}
              className="
                w-full 
                border-b 
                border-gray-400
                outline-none
                text-sm
                py-2
                placeholder-gray-400
                focus:border-[#087f83]
              "
            />
          </div>

            {/* Email */}
          <div>
            <input
              required
              type="email"
              placeholder="youremail@example.com"
              name = 'email'
              onChange={handleChange}
              className=" w-full border-b border-gray-40 outline-none text-sm py-2 placeholder-gray-400 focus:border-[#087f83]
              "
            />
          </div>

          {/* Password */}
          <div>
            <input
              required
              type="password"
              name = 'password'
              onChange={handleChange}
              placeholder="password"
              className="
                w-full 
                border-b 
                border-gray-400
                outline-none
                text-sm
                py-2
                placeholder-gray-400
                focus:border-[#087f83]
              "
            />
          </div>


          {/* Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="
              w-full
              bg-[#078589]
              text-white
              text-sm
              py-2
              hover:bg-[#066d70]
              transition
            "
          >
            Register
          </button>

        </form>
        {/* Error message */}

        <p className='text-center my-5 text-red-500 text-sm'>This is an error!</p>


        {/* Register */}
        <p className="text-center text-xs mt-5 text-gray-700">
          Do you have an account?
          <Link to="/login" className="text-purple-700 underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;