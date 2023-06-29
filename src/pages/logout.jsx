import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthProvider";
import NavbarPages from "../components/navbar-pages";
import axios from "../api/axios";

const Logout = () => {
  const { setAuth } = useContext(AuthContext);

  setAuth({});
  axios.get("/auth/logout");
  return (<>
    <NavbarPages title="Logout was successful"/>
  </>)

  
};

export default Logout;
