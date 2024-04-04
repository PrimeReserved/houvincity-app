import React from 'react'

function NumberCount() {
  return (
    <div className='flex justify-center items-center mt-[5rem] text-center text-[#040A3B] text-xl gap-2'>
      <p className='w-9 h-10 bg-primary text-white flex items-center justify-center'>1</p>
      <p className='w-9 h-10 flex items-center justify-center'>2</p>
      <p className='w-9 h-10 flex items-center justify-center'>3</p>
      <p className='w-9 h-10 flex items-center justify-center mb-3'>...</p>
      <p className='w-15 h-10 flex items-center justify-center'>Next</p>

    </div>
  )
}

export default NumberCount
