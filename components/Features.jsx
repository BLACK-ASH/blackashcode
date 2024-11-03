import React from 'react'
import Image from 'next/image'

const Features = () => {
    return (
        <div className='w-full md:w-[75%] lg:w-[60%] mx-auto p-2 '>
            <p className='text-2xl font-bold mb-4'>
                Features
            </p>
            <div className="grid grid-cols-1 m-2 mx-4 md:grid-cols-2  gap-4">
                <div className=" bg-base-200 rounded-md p-3 flex flex-col items-center gap-3">
                    <Image src="/keyboard.svg" width={50} height={50} alt='html' />
                    <div className="text-center text-2xl text-base-content">
                        Playground
                    </div>
                    <div className="text-sm p-3 text-center">
                        This is your ultimate coding playground that serves as a learning platform.For multiple languages.
                    </div>
                </div>
                <div className=" bg-base-200 rounded-md p-3 flex flex-col items-center gap-3">
                    <Image className='dark:invert' src="/icon.svg" width={50} height={50} alt='Web Builder' />
                    <div className="text-center text-2xl text-base-content">
                        Web Builder
                    </div>
                    <div className="text-sm p-3 text-center">
                        Get started with our web builder. For development of websites.
                    </div>
                </div>
                <div className=" bg-base-200 rounded-md p-3 flex flex-col items-center gap-3">
                    <Image src="/problem.svg" width={50} height={50} alt='Coding Problems' />
                    <div className="text-center text-2xl text-base-content">
                        Coding Problems
                    </div>
                    <div className="text-sm p-3 text-center">
                        Get started with our coding problems. Enhance your problem solving skills.
                    </div>
                </div>
                <div className=" bg-base-200 rounded-md p-3 flex flex-col items-center gap-3">
                    <Image src="/learn.png" width={50} height={50} alt='Learn' />
                    <div className="text-center text-2xl text-base-content">
                        Learn To Code
                    </div>
                    <div className="text-sm p-3 text-center">
                        Get started with our Learn To Code. And Lear To Code From Scratch.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
