'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
     
         <div className='text-center min-h-screen w-full md:w-[75%] space-y-4 lg:w-[60%] mx-auto p-2 '>
         <Image className='w-1/2 mx-auto drop-shadow-lg ' src="/error.png" width={400} height={400} alt='404' />
         <h2 className='text-5xl font-bold'>Something went wrong!</h2>
         <p className='text-2xl'>Could not find requested resource</p>
         <button className='btn btn-primary'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
       </div>
    )
}