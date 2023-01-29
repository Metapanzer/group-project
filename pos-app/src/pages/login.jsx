import axios from "axios";

import { useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from "react-router-dom";


export default function Login() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  let username = useRef();
  let password = useRef();

  let onLogin = async () => {
    try {
      let inputUsername = username.current.value;
      let inputPassword = password.current.value;
      if (!inputUsername || !inputPassword) throw {message: 'Complete your data!'}

      let response = await axios.get(
        `http://localhost:5000/users?username=${username.current.value}&password=${password.current.value}`
      );

      if (response.data.length === 0) throw { message: "Account Not Found" };
      setMessage("");
      setTimeout(navigate("/"),10000)
      toast.success("Login Success");
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message)
    }
  };

  return (
    <div className="bg-[#252836] text-white h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="bg-[#1F1D2B] h-[50vh] w-[40vw] border-solid rounded-lg flex flex-col items-center justify-around">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div>
          <div>
            <input
              ref={username}
              type="text"
              placeholder="Username"
              className="py-2 px-2 w-[30vw] h-[8vh] m-1 rounded-md text-[#1F1D2B]"
            />
          </div>
          <div>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="py-2 px-2 w-[30vw] h-[8vh] m-1 rounded-md text-[#1F1D2B]"
            />
          </div>
          <div>
            <button onClick={onLogin} className="text-mdtext-center px-3 py-2 align border border-[#252836] ml-1 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150">
              Login
            </button>
          </div>
          <div><Toaster/></div>
        </div>
      </div>
    </div>
  );
}
