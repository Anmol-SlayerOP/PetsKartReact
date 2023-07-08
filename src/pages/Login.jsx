import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import NavbarPages from "../components/navbar-pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(JSON.stringify({ email, password }));

      const response = await axios.post(
        LOGIN_URL,

        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setAuth(response?.data);
      console.log(response);
      setEmail("");
      setPassword("");
      toast.success("Logged in Successfully !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        toast.error("No Server Response", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (err.response?.status === 400) {
        toast.error("Missing Username or Password", {
          position: "top-right",
          theme: "colored",
        });
      } else if (err.response?.status === 401) {
        toast.error("Unauthorized", {
          position: "top-right",
          theme: "colored",
        });
      } else {
        toast.error("Login Failed", {
          position: "top-right",
          theme: "colored",
        });
      }
    }
  };

  const showToast = () => {};

  return (
    <>
      <NavbarPages title="Login" />
      <section className="">
        <div className="flex flex-col items-center justify-center px-6  py-10  h-1/2 mx-auto  bg-[#ffe712] rounded-3xl w-1/2 sm:w-2/3 lg:w-1/3">
          
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black pb-5">
            LOGIN
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 ">
            <div className="flex flex-col gap-5">
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-black"
                htmlFor="username"
              >
                Email:
              </label>
              <input
                type="email"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label
                htmlFor="password"
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-black"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
              />
              <button
                className="w-full text-black bg-white bg-primary-white hover:bg-primary-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={showToast}
              >
                Sign In
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </form>
          <p className="text-sm font-light text-gray-500 dark:text-slate-900 mt-3">
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
