import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
    return (
        <div className='md:w-[75%] lg:w-[60%] mx-auto justify-between items-center my-5 p-4 md:my-10 md:p-8 w-full max-sm:flex-col-reverse flex'>
            <div className='space-y-5 flex flex-col max-sm:items-center'>
                <h1 className='text-3xl md:text-5xl max-sm:text-center font-bold '>
                    Code Anywhere,
                    <br />
                    Anytime
                </h1>
                <h2 className='text-wrap font-semibold max-sm:text-center w-[80%]' >
                    A fast, intuitive, and powerful coding experience right in your browser.
                </h2>
                <p className='text-accent font-bold' >Start Coding Now</p>
                <div className='flex gap-3'>
                    <button className='btn px-10 btn-circle w-fit btn-primary'>Playground</button>
                    <button className='btn px-10 btn-circle w-fit btn-primary btn-outline'>Login</button>
                </div>
            </div>
            <div className='w-1/2 max-sm:my-8 object-fill'>
                <Image
                    src={"/heroPhoto.png"}
                    width={400}
                    height={400}
                    alt='hero'
                />
            </div>
        </div>
    )
}

export default HeroSection
