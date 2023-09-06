import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import { selectUser, logout } from "./features/userSlice"; // Import selectUser and logout actions
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // Dispatch the logout action to your Redux store
  };

  return (
    <div className="logout">
      <h1 className="pooja">
        Welcome <span className="user">{user.name}</span>
        <br></br>
        <button className="logout_but" onClick={(e) => handleLogout(e)}>
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Logout;
