"use client";
import { authClient } from '@/lib/auth-client';

import React from 'react';
import toast from 'react-hot-toast';

const SingInPage = () => {
   const onSubmit= async (e: React.SubmitEvent<HTMLElement>)=>{
          e.preventDefault();
          const fromdata=new FormData(e.target)
          const user=Object.fromEntries(fromdata.entries()) as { email:string,  password:string};
        const { data, error } = await authClient.signIn.email({
          ...user,
          callbackURL:"/",
        });
        if(data){
          console.log(data)
          toast.success("Sign In successful");
       
    }
     if(error){
          console.log(error)
      toast.error(error.message || "Something went wrong");
        }
      }
       const handleGoogleSignIn = async () => {
 await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className='flex flex-col items-center justify-center mt-4'>
      <h1 className='text-2xl font-bold text-red-700'>সাইন ইন</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
     

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="Password" />

          <button  type="submit" className="btn btn-neutral mt-4 w-md">সাইন ইন করুন</button>
        </fieldset>
      </form>
     <button
        onClick={handleGoogleSignIn}
        className="btn mt-3 mb-3 w-md rounded-xl border border-gray-300 bg-white text-gray-800 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 font-bold">
          G
        </span>
        Continue with Google
      </button>
    </div>
  );
};

export default SingInPage