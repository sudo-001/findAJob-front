import React from 'react'

type Props = {}

function ApplyBtnWhite({}: Props) {
  return (
    <div className='border-2 border-[#9dadbe] rounded-[5px] bg-[#fff] flex justify-center items-center w-full hover:cursor-pointer hover:shadow-lg transition py-2'>
      <p className='font-bold text-[#000]'>Apply Now</p>
    </div>
  )
}

export default ApplyBtnWhite;