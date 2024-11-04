import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='w-full md:w-[75%] lg:w-[60%] mx-auto p-2'>
            <div className='grid m-2 mx-4 grid-cols-2 lg:grid-cols-4  gap-4 '>
                <div className='flex flex-col items-center' >
                    <div className='text-lg md:text-3xl lg:text-2xl font-bold  '>
                        BlackAsh
                        <span className='text-primary'>
                            Code
                        </span>
                    </div>
                    <Image src="/logo.png" width={100} height={75} alt='logo'  />
                </div>
                <div>
                    <p className=' font-bold' >Quick links</p>
                    <ul className='text-sm'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/playground'>Playground</Link></li>
                        <li><Link href='/web-builder'>Web Builder</Link></li>
                        <li><Link href='/coding-problems'>Coding Problems</Link></li>
                        <li><Link href='/learn-to-code'>Learn To Code</Link></li>
                    </ul>
                </div>
                <div>
                    <p className=' font-bold'>Legals</p>
                    <ul className='text-sm'>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div>
                    <p className=' font-bold'>Contact</p>
                    <ul className='text-sm'>
                        <li>Discord</li>
                        <li>Twitter</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer