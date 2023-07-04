import React from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

type Props = {
    numberOfPages?: number
}

function PaginationNumber(props: Props) {
    const { numberOfPages } = props;
    return (
        <div className="flex w-full h-12 py-4 justify-center items-center">

            <div className='h-full w-max py-4 flex flex-row items-center justify-center'>
                <GrFormPrevious className='w-6 h-6 text-gray-800 cursor-pointer' />

                <ul className='flex flex-row list-none w-full h-full items-center justify-between'>
                    <li className='bg-[#0066FF] text-[#FFF] px-2 rounded-[5px] mx-2 cursor-pointer'>1</li>
                    <li className='text-[#000] mx-2 cursor-pointer'>2</li>
                    <li className='text-[#000] mx-2 cursor-pointer'>3</li>
                    <li className='text-[#000] mx-2 cursor-pointer'>4</li>
                    <li className='text-[#000] mx-2 cursor-pointer'>5</li>
                    <li className='text-[#000] mx-2 cursor-pointer'>...</li>
                    <li className='text-[#000] mx-2 cursor-pointer'>33</li>
                </ul>
                <GrFormNext className='w-6 h-6 text-gray-800 cursor-pointer' />
            </div>
        </div>
    )
}

export default PaginationNumber;