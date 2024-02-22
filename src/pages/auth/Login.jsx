// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';


export default function LoginPage(){
    return(
        <>
        <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className='px-10 py-20 rounded-3xl  border-1 border-gray-200 '>
            <h1 className='text-5xl font-semibold'>Welcome Back!</h1>
            <p className='font-italic text-lg text-gray-500 mt-3'>Connect with professionals who share your mindset <br></br>and open doors to a satisfying career!</p>
            <div className='mt-8'></div>
            <div>
                <div>
                    <label className='text-lg font-medium'> Email</label>
                    <input
                        className="w-full  rounded-xl p-4 mt-2 mb-3 bg-gray-200"
                        type="text"
                        id="email"
                        placeholder='tryfix@gmail.com' />
                </div>
                <div>
                    <label className='text-lg font-medium mt-5'> Password</label>
                    <input
                        className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                        type="password"
                        id="password"
                        placeholder='••••••••••••••••••••••' />
                </div>
                <div className='mt-4 flex justify-between items-center'>
                    <div>
                        <input type="checkbox"
                            id='remember' />
                        <label className='ml-2  font-medium text-base '>Remember me </label>
                    </div>
                    <button className='font-medium text-base text-blue-400'>
                    <Link to="/forgotpassword">
                        Forgot password
                    </Link>
                        </button>
                </div>
                <div>
                    <div className='mt-8  flex flex-col gap-y-4 text-white'>
                        <button className=' active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold'>Sign In</button>
                    </div>
                </div>
                <div className='mt-6 justify-center text-center'>
                    <div className='font-italic text-base'>
                        Dont have an account yet? <Link to="/register" className="text-blue-500 hover:underline hover:text-blue-600">Sign up </Link> now, its free!
                      
                    </div>
                </div>

            </div>
            </div>
 

        </div></>
    )
}