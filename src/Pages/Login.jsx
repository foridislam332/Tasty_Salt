import React from 'react';
import { Link } from 'react-router-dom';

import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className='flex flex-col items-center justify-center pt-52 pb-20'>

            <div className="md:w-[450px] bg-white p-8 rounded-lg shadow-xl">
                <form onSubmit={handleOnSubmit}>
                    <h1 className='text-4xl text-center mb-8'>Please Login</h1>
                    <div className="rounded-md shadow-sm flex flex-col gap-4">
                        <div>
                            <label htmlFor="email" className='block'>Email address :</label>
                            <input id='email' name="email" type="email" required placeholder="Email address" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <div>
                            <label htmlFor="password" className='block'>Password :</label>
                            <input id='password' name="password" type="password" required placeholder="Password" className='w-full py-2 pl-3 outline-secondary border' />
                        </div>
                        <button type='submit' className='btn_regular mt-4'>Login</button>
                    </div>
                </form>
                <div className='text-center my-4 flex items-center gap-3'>
                    <span className='border-b w-full ml-8'></span>
                    <span>OR</span>
                    <span className='border-b w-full mr-8'></span>
                </div>
                <div className='flex items-center justify-around gap-5 text-lg mb-5'>
                    <button className='flex items-center justify-center shadow-xl w-full py-2 px-4 gap-2 rounded-lg'><FaGoogle /> Google</button>
                    <button className='flex items-center justify-center shadow-xl w-full py-2 px-4 gap-2 rounded-lg'><FaGithub /> GitHub</button>
                </div>
                <p className='text-center'>
                    New to Tasty Salt?
                    <Link className='text-lg font-semibold' to='/register'> Register Now</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;