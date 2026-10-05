"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };


  return (
    <div className="absolute right-4 top-4">
      {user ? (
        <div className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100 px-3 py-2 shadow-md">
        <Link href={"/profile"}>
          <div className="overflow-hidden rounded-full ring-2 ring-primary ring-offset-2">
            <Image
              width={52}
              height={52}
              src={user.image || "/default-avatar.png"}
              alt={user.name || "User"}
              className="h-[52px] w-[52px] rounded-full object-cover"
            />
          </div>
        
        </Link>

          <div className="hidden sm:block">
            <p className="text-xs text-base-content/60">Welcome back</p>
            <h1 className="max-w-[140px] truncate text-sm font-semibold">
              {user.name}
            </h1>

            <button
              onClick={handleSignOut}
              className="btn btn-error btn-xs mt-1 text-white"
            >
              Sign Out
            </button>
            
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
         <Link href={"/singin"}>
          <button className="btn btn-ghost btn-sm">সাইন ইন</button>
         </Link>

          <Link href={"/singup"}>
          <button className="btn btn-error btn-sm text-white">
            সাইন আপ
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
















































// "use client"
// import { authClient } from '@/lib/auth-client';
// import Image from 'next/image';


// const Userinfo = () => {
//     const { data: session } = authClient.useSession()
//     const user = session?.user
//     console.log(user)
//     return (
//         <div className="absolute right-4 top-5 flex items-center gap-2 text-sm">
//             {
//                 user ? <div className="flex flex-col ">
//                     <div className="rounded-2xl overflow-hidden">
//                         <Image
//                             width={64}
//                             height={64}
//                             src={user?.image || "/default-avatar.png"}
//                             alt={user?.name || "User"}
//                             className="rounded-2xl object-cover"
//                         />
//                     </div>
//                     <h1 className="text-xl text-red font-semibold">{user.name}</h1>
//                 </div> : <div>
//                     <button className="btn btn-ghost btn-sm">সাইন ইন</button>
//                     <button className="btn btn-error btn-sm text-white">
//                         সাইন আপ
//                     </button>
//                 </div>
//             }

//         </div>
//     );
// };

// export default Userinfo;