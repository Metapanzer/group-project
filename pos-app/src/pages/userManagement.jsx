import axios from "axios";
import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import DisplayDate from "../components/displayDate";

export default function UserManagement() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [addUser, setAddUser] = useState(0);
  const [message, setMessage] = useState("");
  const [editID, setEditID] = useState(0);

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

  let editUserOn = (id) => {
    setAddUser(2);
    setEditID(id);
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
      if (!inputUsername || !inputPassword)
        throw { message: "Complete the data!" };
      if (inputRole === "choose") throw { message: "Choose the role!" };
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

  let handleEditUser = async (id) => {
    try {
      let inputUsername = username.current.value;
      let inputPassword = password.current.value;
      let inputRole = role.current.value;
      let newData = {};
      let checkUsername = await axios.get(
        `http://localhost:5000/users?username=${inputUsername}`
      );
      if (checkUsername.data.length > 0)
        throw { message: "Username already exist!" };

      if (inputUsername) {
        newData.username = inputUsername;
      }
      if (inputPassword) {
        newData.password = inputPassword;
      }
      if (inputRole != "choose") {
        newData.role = inputRole;
      }
      console.log(id);
      await axios.patch(`http://localhost:5000/users/${id}`, newData);
      toast.success("Update User Success");
      setMessage("");
      setAddUser(0);
      onGetData();
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  let handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      toast.success("Delete User Success");
      setMessage("");
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
            <td className="text-center">{value.id}</td>
            <td className="text-center">{value.username}</td>
            <td className="text-center">{value.role}</td>
            <td className="text-center">
              <button
                onClick={() => editUserOn(value.id)}
                className="text-mdtext-center px-3 py-2 align border border-[#252836] m-0 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(value.id)}
                className="text-mdtext-center px-3 py-2 align border border-[#252836] ml-1 bg-[#252836] text-white rounded-lg hover:cursor-pointer hover:bg-white hover:text-[#252836] hover:duration-150"
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
    ) : addUser === 1 ? (
      <div className="flex flex-col">
        <div className="text-[#EA7C69] text-md font-bold m-0 mb-3">
          Add User
        </div>
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
        <select
          ref={role}
          className="py-2 px-2 w-[20vw] h-[6vh] m-1 text-sm rounded-md text-[#1F1D2B]"
        >
          <option value="choose">Choose Role</option>
          <option value="admin">Admin</option>
          <option value="cashier">Cashier</option>
        </select>
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
    ) : (
      <div className="flex flex-col">
        <div className="text-[#EA7C69] text-md font-bold m-0 mb-3">
          Edit User (ID: {editID})
        </div>
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
        <select
          ref={role}
          className="py-2 px-2 w-[20vw] h-[6vh] m-1 text-sm rounded-md text-[#1F1D2B]"
        >
          <option value="choose">Choose Role</option>
          <option value="admin">Admin</option>
          <option value="cashier">Cashier</option>
        </select>
        <button
          onClick={() => handleEditUser(editID)}
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
    <div
      className="p-5 bg-[#252836] overflow-y-auto w-[100vw]"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      <div className="flex flex-row justify-between">
        <div className="mb-10">
          <h1 className="text-white font-bold text-3xl mb-1">
            User Management
          </h1>
          <DisplayDate />
        </div>
      </div>
      <div className="bg-[#252836] text-white h-auto flex items-start justify-center">
        <div className="bg-[#1F1D2B] w-[45vw] x border-solid rounded-lg flex flex-col items-center">
          <div className="text-[#EA7C69] text-xl font-bold m-4 mb-0">
            List of Users
          </div>
          <div>
            <table className="table-fixed border-separate border-spacing-4 m-0">
              <thead className="text-[#EA7C69]">
                <tr>
                  <th className="w-[3vw]">ID</th>
                  <th className="w-[10vw]">Username</th>
                  <th className="w-[5vw]">Role</th>
                  <th className="w-[15vw]">Action</th>
                </tr>
              </thead>
              <tbody>{mapUsers()}</tbody>
            </table>
          </div>
        </div>
        <div className="bg-[#1F1D2B] w-[30vw] border-solid rounded-lg flex flex-col items-center justify-begin ml-4">
          <div className="text-[#EA7C69] text-xl font-bold m-4">
            Admin Control
          </div>
          <div className="mb-4">{addUserField()}</div>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
