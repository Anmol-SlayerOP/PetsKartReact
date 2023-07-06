import { useRef, useState, useEffect } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';


import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import NavbarPages from '../components/navbar-pages';
import { toast } from 'react-toastify';
const LOGIN_URL = '/auth/login';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(JSON.stringify({email,password}))

            const response = await axios.post(LOGIN_URL,
                
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            setAuth(response?.data );
            console.log(response);
            setEmail('');
            setPassword('');
            toast.success('Logged in Successfully !', {
                position: "top-right",
                theme: "colored",
            });
            navigate(from, { replace: true });

            
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrMsg('No Server Response');
                toast.error('No Server Response', {
                    position: "top-right",
                    theme: "colored",
                });
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
                toast.error('Missing Username or Password', {
                    position: "top-right",
                    theme: "colored",
                });
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
                toast.error('Unauthorized', {
                    position: "top-right",
                    theme: "colored",
                });
            } else {
                setErrMsg('Login Failed');
                toast.error('Login Failed', {
                    position: "top-right",
                    theme: "colored",
                });
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        <NavbarPages title="Login" />
        <section className='flex w-full justify-center'>
            <div className='felx w-fit border border-black p-5 '>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col gap-5'>
                <label htmlFor="username">Email:</label>
                <input
                    type="email"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className='border border-black'
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    className='border border-black'
                />
                <button>Sign In</button>
                </div>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
            </div>
        </section>
        </>
    )
}

export default Login
