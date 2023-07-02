import React from 'react'

type Props = {}

function Partner({}: Props) {
  return (
    <div className='py-8'>
      <h1 className='w-full text-center text-2xl font-bold'>Our Partners</h1>

      <div className='flex flex-row py-8 justify-center items-center text-xl'>
        <h1 className='text-xl px-4 hover:cursor-pointer mx-4'>Partner1</h1>
        <h1 className='text-xl px-4 hover:cursor-pointer mx-4'>Partner2</h1>
        <h1 className='text-xl px-4 hover:cursor-pointer mx-4'>Partner3</h1>
        <h1 className='text-xl px-4 hover:cursor-pointer mx-4'>Partner4</h1>
        <h1 className='text-xl px-4 hover:cursor-pointer mx-4'>Partner5</h1>
      </div>
    </div>
  )
}

export default Partner;