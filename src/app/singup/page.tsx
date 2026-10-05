"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SingUpPage = () => {
  const onSubmit= async (e: React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();
        const fromdata=new FormData(e.target)
        const user=Object.fromEntries(fromdata.entries()) as {name: string, email:string, image:string, password:string};
      const { data, error } = await authClient.signUp.email({
        ...user,
        callbackURL:"/",
      });
      if(data){
        console.log(data)
        redirect("/")
  }
   if(error){
        console.log(error)
      }
    }

   const handleGoogleSignIn = async () => {
 await authClient.signIn.social({
      provider: "google",
    });
  };
   const handleGithubSignIn = async () => {
 await authClient.signIn.social({
      provider: "github",
    });
  };


  return (
    <div className='flex flex-col items-center justify-center mt-4'>
      <h1 className='text-2xl font-bold text-red-700'>সাইন আপ</h1>
     <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
           <label className="label">নাম</label>
          <input name="name" type="text" className="input w-md" placeholder="Name" />

           <label className="label">Image</label>
          <input  name="image" type="url" className="input w-md" placeholder="ImageURL" />

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="Password" />

          <button  type="submit" className="btn btn-neutral mt-4 w-md">সাইন আপ করুন</button>
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
      <button
        onClick={handleGithubSignIn}
        className="btn mt-3 mb-3 w-md rounded-xl border border-gray-300 bg-white text-gray-800 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 font-bold">
          G
        </span>
        Continue with github
      </button>
    </div>
  );
};

export default SingUpPage;