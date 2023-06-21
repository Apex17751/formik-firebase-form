import React from 'react'
import {Link} from "react-router-dom"

const Part = () => {
  return (
   <div className='pt-20'>
     <div className='relative'>
        <h1 className='text-3xl lg:text-5xl xl:w-2/4 xs:w-full w-2/3 mx-auto xl:mx-auto text-center font-bold leading-28 text-zinc-600'>Ready to test my Formik form validator with Firebase and React-Toastify?</h1>
        <p className='text-center pt-5 text-zinc-600 '>click up the <a href="" className='underline'>button</a> below</p>
        <Link to='/form'>
        <button type='button'  className='mx-auto bg-blue-600 block mt-10 px-5 py-3 lg:w-1/3 w-2/4 text-white font-bold rounded-lg '>Next</button>
        </Link>
      
    </div>

<div className='bg-zinc-200 w-full absolute bottom-0 py-4 px-4'>
<p className='text-zinc-600 text-center'>copyright © | All rights Reserved 2023 </p>

</div>
   </div>
  )
}

export default Part
