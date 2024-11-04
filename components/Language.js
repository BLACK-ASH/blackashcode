import React from 'react'
import Image from 'next/image'

const Language = () => {
    return (
        <div className='w-full md:w-[75%] lg:w-[60%] mx-auto p-2'>
            <p className='text-2xl font-bold mb-4'>
                Language
            </p>
            <div className='bg-base-200 rounded-md w-full my-4 p-2 flex max-md:gap-8 glow md:justify-around overflow-x-auto '>
                <Image
                    src="/htmllogo.png"
                    width={50}
                    height={50}
                    alt='html'
                />
                <Image
                    src="/csslogo.png"
                    width={50}
                    height={50}
                    alt='css'
                />
                <Image
                    src="/javascriptlogo.png"
                    width={50}
                    height={50}
                    alt='js'
                />
                <Image
                    src="/typescriptlogo.png"
                    width={50}
                    height={50}
                    alt='typescript'
                />
                <Image
                    src="/pythonlogo.png"
                    width={50}
                    height={50}
                    alt='python'
                />
                <Image
                    src="/clogo.png"
                    width={50}
                    height={50}
                    alt='c'
                />
                <Image
                    src="/cpplogo.png"
                    width={50}
                    height={50}
                    alt='cpp'
                />
                <Image
                    src="/phplogo.png"
                    width={80}
                    height={50}
                    alt='php'
                />

            </div>
        </div>
    )
}

export default Language