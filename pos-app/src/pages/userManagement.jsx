import axios from "axios";

import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import DisplayDate from "../components/displayDate";

export default function UserManagement() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [addUser, setAddUser] = useState(0);
  const [message, setMessage] = useState("");

  let username = useRef();
  let password = useRef();
  let role = useRef();

  let onGetData = async () => {
    try {
      let responseUsers = await axios.get("http://localhost:5000/users");
      setData(responseUsers.data);
    } catch (error) {}
  };

  let addUserOn = () => {
    setAddUser(1);
  };

  let cancelAddUser = () => {
    username.current.value = "";
    password.current.value = "";
    role.current.value = "";
    toast("Add User Canceled", {
      icon: "⚠️",
    });
    setMessage("");
    setAddUser(0);
    onGetData();
  };
  let handleAddUser = async () => {
    try {
      let inputUsername = username.current.value;
      let inputPassword = password.current.value;
      let inputRole = role.current.value;
      if (!inputUsername || !inputPassword || !inputRole)
        throw { message: "Complete the data!" };
      let checkUsername = await axios.get(
        `http://localhost:5000/users?username=${inputUsername}`
      );
      if (checkUsername.data.length > 0)
        throw { message: "Username already exist!" };

      await axios.post("http://localhost:5000/users", {
        username: inputUsername,
        password: inputPassword,
        role: inputRole,
      });
      username.current.value = "";
      password.current.value = "";
      role.current.value = "";
      toast.success("Add User Success");
      setMessage("");
      setAddUser(0);
      onGetData();
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  let mapUsers = () => {
    return data.length === 0 ? (
      <div>User not found</div>
    ) : (
      data.map((value, index) => {
        return (
          <tr>
            <td>{value.id}</td>
            <td>{value.username}</td>
            <td>{value.role}</td>
            <td>
              <button
                className="text-mdtext-center px-3 py-2 align border border-[#252836] m-0 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
              >
                Edit
              </button>{" "}
              <button
                className="text-mdtext-center px-3 py-2 align border border-[#252836] m-0 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  let addUserField = () => {
    return addUser === 0 ? (
      <div>
        <button
          onClick={addUserOn}
          className="text-md text-center px-3 py-2 align border border-[#252836] ml-1 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
        >
          Add User
        </button>
      </div>
    ) : (
      <div className="flex flex-col">
        <input
          ref={username}
          type="text"
          placeholder="Username"
          className="py-2 px-2 w-[20vw] h-[6vh] m-1 text-sm rounded-md text-[#1F1D2B]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-2 px-2 w-[20vw] h-[6vh] m-1 text-sm rounded-md text-[#1F1D2B]"
        />
        <input
          ref={role}
          type="text"
          placeholder="Role"
          className="py-2 px-2 w-[20vw] h-[6vh] m-1 text-sm rounded-md text-[#1F1D2B]"
        />
        <button
          onClick={handleAddUser}
          className="text-mdtext-center px-3 py-2 align border border-[#252836] m-1 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
        >
          Submit
        </button>
        <button
          onClick={cancelAddUser}
          className="text-mdtext-center px-3 py-2 align border border-[#252836] m-1 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
        >
          Cancel
        </button>
      </div>
    );
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div className="p-5 bg-[#252836] overflow-y-auto">
      <div className="flex flex-row justify-between">
        <div className="mb-10">
          <h1 className="text-white font-bold text-3xl mb-1">Jaegar Resto</h1>
          <DisplayDate />
        </div>
      </div>
      <div className="bg-[#252836] text-white h-[100vh] w-[90vw] flex items-stretch justify-center">
        <div className="bg-[#1F1D2B] w-[40vw] border-solid rounded-lg flex flex-col items-center">
          <div className="text-[#EA7C69] text-xl font-bold m-4 mb-0">
            List of Users
          </div>
          <div>
            <table className="table-fixed border-separate border-spacing-4 m-0">
              <thead className="text-[#EA7C69]">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{mapUsers()}</tbody>
            </table>
          </div>
        </div>
        <div className="bg-[#1F1D2B] w-[30vw] border-solid rounded-lg flex flex-col items-center justify-begin">
          <div className="text-[#EA7C69] text-xl font-bold m-4">
            Admin Control
          </div>
          <div>{addUserField()}</div>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
