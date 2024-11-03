import React from 'react'

const PlayCz = () => {
    return (
        <div className='w-full md:w-[75%] lg:w-[60%] mx-auto p-2 ' >
            <p className='text-2xl font-bold mb-4'>Playground Coustomization</p>
            <div className='grid  m-2 mx-4 font-semibold md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='bg-secondary text-secondary-content  rounded-full text-center p-3 ' >
                    Code Completion
                </div>
                <div className='bg-secondary text-secondary-content  rounded-full text-center p-3 ' >
                    Code Snippet
                </div>
                <div className='bg-secondary text-secondary-content   rounded-full text-center p-3 ' >
                    Code Hint
                </div>
                <div className='bg-secondary  text-secondary-content rounded-full text-center p-3 ' >
                    Multiple Theme
                </div>
                <div className='bg-secondary  text-secondary-content rounded-full text-center p-3 ' >
                    Multiple Language
                </div>
                <div className='bg-secondary  text-secondary-content rounded-full text-center p-3 ' >
                    Adjustable Font
                </div>

            </div>
        </div>
    )
}

export default PlayCz
