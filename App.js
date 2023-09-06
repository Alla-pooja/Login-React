import "./styles.css";
import "./App.css";
import React from 'react';
import Login from "./Login.js";
import { selectUser } from "./features/userSlice";
import {useSelector} from "react-redux";
import Logout from "./Logout";
const App = () => {
  const user = useSelector(selectUser); 
    return (
        <div>
          {user ? <Logout/> :<Login/>}
          </div>
        
    )

}
export default App;
