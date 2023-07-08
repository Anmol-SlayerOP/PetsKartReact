import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import NavbarPages from "../components/navbar-pages";
import axios from "../api/axios";
import { toast } from "react-toastify";

const USER_REGEX = /^[a-zA-Z0-9_ ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();

  const [userName, setUserName] = useState("");


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [matchPwd, setMatchPwd] = useState("");

  //prashix
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      // if button enabled with JS hack
      //prashix
    const userNameCheck = USER_REGEX.test(userName);
    if (!userNameCheck) {
        toast.error("User Name can contain digits and alphabets only", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }

    if (userName.length < 3 || userName.length > 23) {
        toast.error("3 char < password < 23 char", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }
  
    if (password.length < 8 || password.length > 24) {
      toast.error("8 char < password < 24 char", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const hasRequiredCharacters = PWD_REGEX.test(password);

    if (!hasRequiredCharacters) {
      toast.error("Password must contain special character, digits and alphabet", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (password !== matchPwd) {
      toast.error("Password are not the same", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      return;
    }
    try {
      const roles = ["ROLE_USER"];
      const response = await axios.post(
        "/auth/signup",
        JSON.stringify({ username: userName, email, password, roles }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))

      //clear state and controlled inputs
      setUserName("");
      setEmail("");
      setPassword("");
      setMatchPwd("");
      toast.success("Registered Successfully !", {
        position: "top-right",
        theme: "colored",
      });
    } catch (err) {
      if (!err?.response) {
        toast.error("No Server Response !", {
          position: "top-right",
          theme: "colored",
        });
      } else if (err.response?.status === 409) {
        toast.error("This email is already registered !", {
          position: "top-right",
          theme: "colored",
        });
      } else {
        toast.error("Registration Failed !", {
          position: "top-right",
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <NavbarPages title="Register" />
      {/* {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            Login
          </p>
        </section>
      ) : ( */}
        <section className=" flex flex-col items-center justify-center py-10  h-1/2 mx-auto  bg-[#ffe712] rounded-3xl min-w-[375px] w-[60%] md:max-w-[450px] lg:w-[35%] my-36">
          <h1 className="w-full text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center">
            REGISTER
          </h1>
          <form onSubmit={handleSubmit} className="w-full p-10 lg:px-16">
            <div className="w-full flex flex-col gap-5">
              <label
                className="w-full block text-lg font-medium text-gray-900 dark:text-black"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
                className="  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
              />

              <label
                htmlFor="email"
                className="w-full block text-lg font-medium text-gray-900 dark:text-black"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
              />

              <label
                htmlFor="password"
                className="w-full block text-lg font-medium text-gray-900 dark:text-black"
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

              <label
                htmlFor="confirm_pwd"
                className="w-full block text-lg font-medium text-gray-900 dark:text-black"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
              />

              <button className="w-full text-black bg-yellow-600 bg-primary-white hover:bg-primary-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-lg px-5 py-2 mt-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                SIGN UP
              </button>
              <p className="flex flex-col items-center mt-10 gap-3">
                <div className="text-xl font-semibold">Already registered?</div>
                <button className="line w-full bg-yellow-500 rounded-lg text-lg font-semibold py-2 ">
                  <Link to="/">SIGN IN</Link>
                </button>
              </p>
            </div>
          </form>
        </section>
      {/* )} */}
    </>
  );
};

export default Register;
