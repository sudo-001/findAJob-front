import React, { ChangeEvent, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
// import { FaLocationDot } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Link from 'next/link';

type Props = {}

function SearchBar({ }: Props) {

  const [jobName, setJobName] = useState("")
  const [city, setCity] = useState("")

  const handleChangeJob = (e: ChangeEvent<HTMLInputElement>) => {
    setJobName(e.target.value);
  }

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // REQUETE VERS LE BACKEND POUR RECHERCHER UN JOB
    console.log("REQUETE VERS LE BACKEND POUR RECHERCHER UN JOB")
    console.log("jobName", jobName);
    console.log("city", city);
  }

  return (
    <form className=' flex flex-col md:flex-row w-full '>
      <div className='border-2 border-[#0066FF] flex flex-col items-center rounded-[5px] md:flex-row my-2 md:my-0 w-full'>

        <div className='flex items-center w-full md:w-1/2'>
          <FiSearch className='w-6 h-6 text-gray-700' />
          <input type="text" placeholder='Name of the job' className=' text-gray-700 bg-white border-0 rounded-md dark:border-gray-600 focus:border-[#fff] focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#fff0] px-2 py-2 w-full' value={jobName} onChange={handleChangeJob} />
          <TfiClose width={6} height={6} color='#999999' className='bg-[#F1F4F8] p-1 font-bold w-6 h-6 rounded-full hover:cursor-pointer hover:shadow-md transition-all duration-200' onClick={() => setJobName("")}/>

        <span className='hidden md:block text-lg h-full border-l-2 border-[#000] ml-0 md:ml-4 text-[#0000] mx-0 md:mx-1 content-none'>|</span>
        </div>

        <div className='flex items-center justify-center my-2 ml:my-0 border-t border-t-[#D9D9D9] md:border-none w-full md:w-1/2'>
          {/* <FaLocationDot width={4} height={4} /> */}
          <HiLocationMarker className="w-6 h-6 text-gray-700" />
          <input type="text" placeholder='Name of the job' className=' text-gray-700 bg-white border-0 rounded-md dark:border-gray-600 focus:border-[#fff] focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#fff0] px-2 py-2 w-full' value={city} onChange={handleChangeCity} />
          <TfiClose width={6} height={6} color='#999999' className='bg-[#F1F4F8] p-1 font-bold w-6 h-6 rounded-full hover:cursor-pointer hover:shadow-md transition-all duration-200' onClick={() => setCity("")}/>
        </div>

      </div>

      <button type='submit' className={`py-2 px-4 rounded-[5px] bg-[#0066FF] hover:cursor-pointer hover:shadow-md transition md:ml-4`} onClick={handleSubmit}>
        <h1 className='text-[#fff] font-bold text-lg px-8'>Find</h1>
      </button>

    </form>
  )
}

export default SearchBar