import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthProvider";
import NavbarPages from "../components/navbar-pages";
import axios from "../api/axios";
import { toast } from "react-toastify";

const Logout = () => {
  const { setAuth } = useContext(AuthContext);

  setAuth({});
  axios.get("/auth/logout").then((res)=>{
      toast.success('Logged out successfully !', {
        position: "top-right",
        theme: "colored",
        autoClose: 5000,
        toastId : 'logout'
      });
   
    
  });
  
  return (<>
    <NavbarPages title="Logout was successful"/>
  </>)

  
};

export default Logout;
