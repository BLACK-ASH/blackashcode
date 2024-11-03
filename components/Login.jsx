'use client'; // Make sure to declare this at the top

import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
    const handleSignIn = async (provider) => {
        await signIn(provider);
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-secondary m-1">Login</div>
            <ul tabIndex={0} className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li className=''>
                    <button
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
                        GitHub
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => handleSignIn("google")}
                    >
                        <Image
                            src={"/googlelogo.png"}
                            width={20}
                            height={20}
                            alt="google"
                        />
                        Google
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => handleSignIn("facebook")}
                    >
                        <Image
                            src={"/facebooklogo.png"}
                            width={20}
                            height={20}
                            alt="facebook"
                        />
                        Facebook
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Login;
