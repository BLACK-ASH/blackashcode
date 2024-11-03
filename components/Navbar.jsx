import React from 'react'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth';
import ThemeController from './ThemeController';
import Login from './Login';

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className='flex items-center bg-base-200 glass fixed top-0 w-full justify-between p-2'>
            <div className='flex items-center gap-3 w-40'>
                <Image src="/logo.png" width={50} height={30} alt='logo' />
                <h1 className='text-lg md:text-2xl lg:text-3xl font-bold  '>
                    BlackAsh
                    <span className='text-primary'>
                        Code
                    </span>

                </h1>
            </div>
            <div className='flex gap-3'>
                {session && session?.user ?
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex items-center gap-3 w-fit">
                            <p className=' text-base-content font-bold w-fit hidden sm:block'>{session?.user?.name}</p>
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button ">
                                <Image
                                    className='avatar rounded-full  drawer-button'
                                    src={session.user.image}
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 relative text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <div><ThemeController /></div>
                                <li>{session?.user?.name}</li>
                                <div className='bottom-3'>
                                    <form action={async () => {
                                        "use server";
                                        await signOut({ redirectTo: "/" })
                                    }} >
                                        <button className='btn btn-error btn-outline'>signOut</button>
                                    </form>
                                </div>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className='flex'>
                        <Login />
                        <ThemeController/>
                    </div>
                }

            </div>
        </nav>
    )
}

export default Navbar