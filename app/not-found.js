import Link from 'next/link'
import Image from 'next/image'
export default function NotFound() {
  return (
    <div className='text-center min-h-screen w-full md:w-[75%] space-y-4 lg:w-[60%] mx-auto p-2 '>
      <Image className='w-1/2 mx-auto' src="/error.png" width={400} height={400} alt='404' />
      <h2 className='text-5xl font-bold'>Not Found</h2>
      <p className='text-2xl'>Could not find requested resource</p>
      <button className="btn btn-primary">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  )
}