// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Link } from "react-router-dom";



export default function RegisterPage(){
    return(
        <>
      
      <div className="w-full flex items-center justify-center">
        <div className='px-10 py-20 rounded-3xl  border-1 border-gray-200 '>
            <h1 className='text-5xl font-semibold' >Get Started Now!</h1>
            <p className='font-italic text-lg text-gray-500 mt-3'>Be part of our growing professional community and <br />unlock your career potential!</p>
            <div className='mt-4'></div>
            <div>
            <div>
                    <label className='text-lg font-medium'> Full Name</label>
                    <input
                        className="w-full  rounded-xl p-4 mt-2 mb-3 bg-gray-200"
                        type="text"
                        id="name"
                        placeholder='tryfix' />
                </div>
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
                <div>
                    <label className='text-lg font-medium mt-5'> Confirm Password</label>
                    <input
                        className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                        type="confirmpassword"
                        id="confirmpassword"
                        placeholder='••••••••••••••••••••••' />
                </div>
                
                <div>
                    <div className='mt-8  flex flex-col gap-y-4 text-white'>
                        <button className=' active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold'>Sign Up Now</button>
                    </div>
                </div>
                <div className='mt-6 justify-center text-center'>
                    <div className= ' font-plusjakarta font-italic text-base'>
                    Already have an account? 
        <Link to="/login" className="text-blue-500 hover:underline hover:text-blue-600">Log in here.</Link>
                    </div>
                </div>

            </div>
            </div>
 

        </div></>
    )
}