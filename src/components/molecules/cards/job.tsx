import ApplyBtnWhite from '@/components/atomes/btns/applyBtnWhite'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props = {
    enterpriseName: string,
    location: string,
    jobTitle: string,
    jobType: string,
    timeElapsed: string,
    description: string,
}

function Job(props: Props) {

    const {enterpriseName, location, jobTitle, jobType, timeElapsed, description } = props;

    return (
        <Link href="" className='rounded-[5px] flex flex-col shadow-md transition duration-500  py-8 items-start justify-center hover:bg-[#0066FF] hover:text-[#fff] hover:shadow-lg hover:-translate-y-1 hover:cursor-default px-4 '>
            
            <div className='flex flex-row w-full items-center'>
                <div className='rounded-full w-10 h-10 overflow-hidden flex justify-center items-center bg-[#000]'>
                    <Image src="" alt="entrepriseProfil" width={10} height={10} />
                </div>

                <div className='flex flex-col ml-4 py-4'>
                    <p className='font-bold text-xl'>{enterpriseName}</p>
                    <p className='font-light font-'>{location}</p>
                </div>
            </div>

            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='font-bold text-xl'>{jobTitle}</p>
                    <p className='font-light '>{jobType}</p>
                </div>

                <p className='font-bold'>{timeElapsed}</p>
            </div>


            <div className='w-full py-2'>
                <p className='w-full font-light '>{description}</p>
            </div>

            <div className='w-full'>
                <ApplyBtnWhite />
            </div>
        </Link>
    )
}

export default Job