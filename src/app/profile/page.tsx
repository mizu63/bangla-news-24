
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(
      formData.entries()
    ) as {
      name: string;
      image: string;
    };

    try {
      const { error } = await authClient.updateUser({
        name: newUserData.name,
        image: newUserData.image,
      });

      if (error) {
        console.log(error);
        return;
      }

      setShow(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  if (isPending) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary" />

          <p className="text-sm text-base-content/50">
            Loading profile...
          </p>
        </div>
      </main>
    );
  }


  if (!user) {
    return (
      <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative w-full max-w-md rounded-[2rem] border border-base-300 bg-base-100 p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
            <span className="text-4xl">👤</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm leading-6 text-base-content/60">
            Sign in to access your profile and manage your account.
          </p>

          <Link
            href="/sign-in"
            className="btn btn-primary mt-7 w-full rounded-xl"
          >
            Sign In
          </Link>

          <p className="mt-5 text-sm text-base-content/50">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-primary hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-[85vh] overflow-hidden px-4 py-10 sm:py-14">
    
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
    
        <div className="mb-8 text-center">
          <span className="badge badge-primary px-4 py-3 font-semibold">
            Account
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            My Profile
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-base-content/60 sm:text-base">
            View and manage your personal account information.
          </p>
        </div>

    
        <section className="overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-2xl">
   
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-base-200 to-secondary/10 px-6 pb-10 pt-10 sm:px-10">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10" />

            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-secondary/10" />

            <div className="relative flex flex-col items-center">
          
              <div className="rounded-full bg-base-100 p-1.5 shadow-xl ring-4 ring-primary/30">
                <Image
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User profile"}
                  width={140}
                  height={140}
                  className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
                />
              </div>

            
              <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                {user.name || "User"}
              </h2>

    
              <p className="mt-1 break-all text-sm text-base-content/60">
                {user.email}
              </p>

      
              {user.emailVerified ? (
                <div className="badge badge-success mt-4 gap-2 px-4 py-3 font-semibold">
                  <span>✓</span>
                  Email Verified
                </div>
              ) : (
                <div className="badge badge-warning mt-4 gap-2 px-4 py-3 font-semibold">
                  <span>!</span>
                  Email Not Verified
                </div>
              )}
            </div>
          </div>

      
          <div className="p-6 sm:p-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold">
                Account Information
              </h3>

              <p className="mt-1 text-sm text-base-content/50">
                Your personal account details
              </p>
            </div>

   
            <div className="grid gap-4 sm:grid-cols-2">
           
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/45">
                  Full Name
                </p>

                <p className="mt-2 truncate font-bold">
                  {user.name || "Not available"}
                </p>
              </div>

          
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/45">
                  Email Address
                </p>

                <p className="mt-2 break-all font-bold">
                  {user.email}
                </p>
              </div>

       
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-success/40 hover:shadow-lg sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/45">
                  Account Status
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-success" />

                  <span className="font-bold text-success">
                    Active Account
                  </span>
                </div>
              </div>
            </div>

       
            {show && (
              <form
                onSubmit={handleUpdateProfile}
                className="mt-8 rounded-2xl border border-base-300 bg-base-200/40 p-5 sm:p-6"
              >
                <div className="mb-5">
                  <h3 className="text-lg font-bold">
                    Edit Profile
                  </h3>

                  <p className="mt-1 text-sm text-base-content/50">
                    Update your profile information below.
                  </p>
                </div>

                <div className="space-y-4">
             
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Full Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      defaultValue={user.name || ""}
                      placeholder="Enter your name"
                      className="input w-full rounded-xl"
                      required
                    />
                  </div>

         
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Profile Image URL
                    </label>

                    <input
                      name="image"
                      type="url"
                      defaultValue={user.image || ""}
                      placeholder="https://example.com/image.jpg"
                      className="input w-full rounded-xl"
                    />
                  </div>
                </div>

          
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary flex-1 rounded-xl"
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm" />
                        Updating...
                      </>
                    ) : (
                      "Update Profile"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShow(false)}
                    className="btn btn-outline flex-1 rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

       
            {!show && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/"
                  className="btn btn-outline rounded-xl"
                >
                  ← Back to Home
                </Link>

                <button
                  onClick={() => setShow(true)}
                  className="btn btn-primary rounded-xl"
                >
                  ✏️ Edit Profile
                </button>
              </div>
            )}
          </div>
        </section>


        <p className="mt-6 text-center text-xs text-base-content/40">
          Your account information is private and secure.
        </p>
      </div>
    </main>
  );
};

export default ProfilePage;
