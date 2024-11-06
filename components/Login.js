'use client'; // Make sure to declare this at the top

import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
    const handleSignIn = async (provider) => {
        await signIn(provider);
    };

    return (
        <div className="">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-circle w-full px-4 btn-primary btn-outline" onClick={() => document.getElementById('loginModal').showModal()}>Login</button>
            <dialog id="loginModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <button
                                className='flex gap-4 items-center w-full bg-base-100 rounded-box z-[1] p-2 shadow'
                                type="button"
                                onClick={() => handleSignIn("github")}
                            >
                                <Image
                                    className=""
                                    src={"/githublogo.png"}
                                    width={20}
                                    height={20}
                                    alt="github"
                                />
                              
                                <p>Continue with GitHub</p>
                               
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex gap-4 items-center w-full bg-base-100 rounded-box z-[1] p-2 shadow'
                                type="button"
                                onClick={() => handleSignIn("google")}
                            >
                                <Image
                                    src={"/googlelogo.png"}
                                    width={20}
                                    height={20}
                                    alt="google"
                                />
                                <p>Continue with Google</p>
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex gap-4 items-center w-full bg-base-100 rounded-box z-[1] p-2 shadow'
                                type="button"
                                onClick={() => handleSignIn("facebook")}
                            >
                                <Image
                                    src={"/facebooklogo.png"}
                                    width={20}
                                    height={20}
                                    alt="facebook"
                                />
                                <p>Continue with Facebook</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </dialog>

        </div>
    );
}

export default Login;
