import axios from "axios";

import { useRef, useState } from "react";

export default function Login() {
  const [message, setMessage] = useState("");

  let username = useRef();
  let password = useRef();

  //   let onLogin = async () => {
  //     try {
  //       let response = await axios.get(
  //         `http://localhost:5000/users?username=${username.current.value}&password=${password.current.value}`
  //       );

  //       if (response.data.length === 0) throw { message: "Account Not Found" };
  //       alert("Login Success");
  //       setMessage("");
  //     } catch (error) {
  //       setMessage(error.message);
  //     }
  //   };

  return (
    <div className="bg-[#252836] text-white h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="bg-[#1F1D2B] h-[80vh] w-[50vw] border-solid rounded-lg flex flex-col items-center justify-around">
        <h1 className="text-3xl font-semibold">Login</h1>
        <div>
          <div>
            <input
              ref={username}
              type="text"
              placeholder="Input your username"
              className="py-2 px-2 w-[30vw] m-1 rounded-md"
            />
          </div>
          <div>
            <input
              ref={password}
              type="password"
              placeholder="Input your password"
              className="py-2 px-2 w-[30vw] m-1 rounded-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
