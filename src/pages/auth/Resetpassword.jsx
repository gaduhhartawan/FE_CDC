// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Link } from "react-router-dom";

export default function Resetpassword(){
    return(
        <>
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center">
        <div className='px-10 py-20 rounded-3xl  border-1 border-gray-200 '>
            <h1 className='text-5xl font-semibold'> Forgot Password!</h1>
            <p className='font-italic text-lg text-gray-500 mt-4'>Please enter the email you previously registered with,  <br />and you will receive an email shortly.</p>
            <div className='mt-5'></div>
            <div>
            <div>
                <div>
                    <label className='text-lg font-medium mt-5'> New Password</label>
                    <input
                        className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                        type="password"
                        id="newpassword"
                        placeholder='••••••••••••••••••••••' />
                </div>
                <label className='text-lg font-medium mt-5'> New Confirm Password</label>
                    <input
                        className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                        type="password"
                        id="newconfirmpassword"
                        placeholder='••••••••••••••••••••••' />
                </div>
                <div>
                    <div className='mt-8  flex flex-col gap-y-4 text-white'>
                        <button className=' active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold'>Reset Password</button>
                    </div>
                </div>
                <div className='mt-6 justify-center text-center'>
                    <div className='font-italic text-base'>
                    Oh, do you remember the password now? Lets <Link to="/login" className="text-blue-500 hover:underline hover:text-blue-600"> Log in!</Link> 
                      
                    </div>
                </div>

            </div>
            </div>
 
</div>

        </div></>
    )
}