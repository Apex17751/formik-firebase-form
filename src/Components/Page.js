import React from 'react'
import Part from './Part.js'


const Page = () => {
  return (
    <div className=''>
      <div className='h-screen'>
        <nav className='px-4 py-6 bg-zinc-200'>
            <div className="flex justify-between items-center">
            <div>
            <a href="#" className='font-bold text-xl lg:pl-10'>Brand</a>
            </div>
            <div>
                <ul className='lg:pr-20'>
                   =
                </ul>
            </div>
            </div>

        </nav>
        <Part/>
      </div>
    </div>
  )
}

export default Page
