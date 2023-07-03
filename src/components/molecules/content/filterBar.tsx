import React, { useEffect, useState } from 'react'

type Props = {}

function FilterBar({ }: Props) {
    const [remote, setRemote] = useState(false)


    return (
        <div className='flex flex-col md:flex-row w-full justify-between items-end mt-7 '>

            <div className=' w-full md:w-max'>
                <p className='font-bold'>Sort by:</p>
                <select name="sort" className='bg-[#fff] border border-[#D9D9D9] cursor-pointer text-[#0066FF] font-semibold py-1 px-3 mt-2 w-full rounded-[5px]  focus:outline-none focus:ring-0 '>
                    <option value="Full-time" className='text-[#8f959b] font-semibold'>--any--</option>
                    <option value="Full-time" className='text-[#8f959b]'>Most Recent</option>
                </select>
            </div>

            <div className=' w-full md:w-max'>
                <p className='font-bold'>Type: </p>
                <select name="type" className='bg-[#fff] border border-[#D9D9D9] cursor-pointer text-[#0066FF] font-semibold py-1 px-3 mt-2 w-full rounded-[5px] focus:outline-none focus:ring-0 '>
                    <option value="Full-time" className='text-[#8f959b] font-semibold cursor-pointer'>--any--</option>
                    <option value="Full-time" className='font-semibold text-[#8f959b]'>Full time</option>
                </select>
            </div>

            <div className='flex items-center relative'>
                <p className='text-[#7F8FA0] font-semibold'>Remote Only</p>
                <div className={`w-10 h-6 ml-2 rounded-full border relative flex items-center transition-all duration-200 ${remote ? 'bg-[#0066FF]' : 'bg-[#D9D9D9]'}`}>
                    <div className={` absolute h-5 w-5 rounded-full transition-all duration-200 ease-in-out border cursor-pointer 
        ${remote ? 'right-0 bg-[#0066FF]' : 'left-0  bg-[#7F8FA0]'}`} onClick={() => setRemote(!remote)} />
                </div>
            </div>

            <div className=' w-full md:w-max'>
                <p className='font-bold'>Level :</p>
                <select name="level" className='bg-[#0066FF] hover:cursor-pointer text-white py-1 px-2 mt-2 w-full rounded-[5px] border-none border-gray-200  focus:border-none focus:outline-none focus:ring-0 '>
                    <option value="Full-time" className='text-[#8f959b]'>--any--</option>
                    <option value="Full-time" className=''>Junior</option>
                    <option value="Full-time1" className=''>Senior</option>
                    <option value="Full-time2" className=''>Freelance</option>
                </select>
            </div>

            <div>
                <p className='text-[#7F8FA0] hover:cursor-pointer'>Clear All</p>
            </div>
        </div>
    )
}

export default FilterBar