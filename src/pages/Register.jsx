import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import NavbarPages from "../components/navbar-pages";
import axios from "../api/axios";
import { toast } from "react-toastify";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(true);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [eamilFocus, setEamilFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(true);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(true);
  const [matchFocus, setMatchFocus] = useState(false);

  const [success, setSuccess] = useState(false);
  //prashix




  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    //prashix
    if (password.length < 8 || password.length > 24){
        toast.error('8 char < password < 24 char', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const hasRequiredCharacters =
      PWD_REGEX.test(
        password
      );

      if (!hasRequiredCharacters) {
        toast.error('Password must contain special character', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });  
          return
    }
    if (password !== matchPwd) {
        toast.error('Password are not the same', {
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
      setSuccess(true);
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
        toast.error("Username Taken !", {
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
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Login</a>
          </p>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center px-6  py-10  h-1/2 mx-auto  bg-[#ffe712] rounded-3xl w-1/2 sm:w-2/3 lg:w-1/3">
          <div className=" ">
           
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black"
            >Register</h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="flex flex-col gap-5">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-black"
                htmlFor="username">
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
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
                />
               
                <label htmlFor="email"
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-black">
                  Email:
             
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  onFocus={() => setEamilFocus(true)}
                  onBlur={() => setEamilFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
                />

                <label htmlFor="password"
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-black">
                  Password:
               
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
                />
              

                <label htmlFor="confirm_pwd"
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-black">
                  Confirm Password:
                 
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-500 ease-in-out z-10"
                />

                <button
                className="w-full text-black bg-white bg-primary-white hover:bg-primary-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"

                >
                  Sign Up
                </button>
              </div>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                <Link to="/">Sign In</Link>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
