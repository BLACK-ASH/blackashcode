import React from 'react'
import Image from 'next/image'
import { auth, signOut } from '@/auth';
import Login from './Login';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link'

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className='flex items-center z-50 md:w-[75%] lg:w-[60%] mx-auto  w-full justify-between p-2'>
            <div className='flex items-center gap-3 w-40'>
                <Image src="/logo.png" width={50} height={30} alt='logo' />
                <div className='text-lg md:text-2xl lg:text-3xl font-bold  '>
                    BlackAsh
                    <span className='text-primary'>
                        Code
                    </span>

                </div>
            </div>
            <div className='flex gap-3'>
                {session && session?.user ?
                    <div className="drawer z-50 drawer-end">
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
                        <div className="z-50 drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu z-50 bg-base-200 relative text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <div className='absolute top-3 right-7'><ThemeToggle /></div>
                                <Image
                                    className='avatar rounded-full mx-auto drawer-button'
                                    src={session.user.image}
                                    alt="User Avatar"
                                    width={100}
                                    height={100}
                                />
                                <li className='font-bold text-center m-3'>{session?.user?.name}</li>
                                <ul className='text-lg'>
                                    <div className='divider'></div>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/playground'>Playground</Link></li>
                                    <li><Link href='/web-builder'>Web Builder</Link></li>
                                    <li><Link href='/coding-problems'>Coding Problems</Link></li>
                                    <li><Link href='/learn-to-code'>Learn To Code</Link></li>
                                </ul>
                                <div className=''>
                                    <div className='divider'></div>
                                    <form action={async () => {
                                        "use server";
                                        await signOut({ redirectTo: "/" })
                                    }} >
                                        <button className='btn w-full btn-error btn-outline'>signOut</button>
                                    </form>
                                </div>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className='flex'>
                        <ThemeToggle />
                        <Login />
                    </div>
                }

            </div>
        </nav>
    )
}

export default Navbar