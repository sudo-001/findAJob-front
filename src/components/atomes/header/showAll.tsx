import React from 'react'

type Props = {
    text: string
}

function ShowAll(props: Props) {

    const { text } = props;
    
    return (
        <div className='flex flex-row items-center justify-center hover:text-[#272727]'>
            <p className='text-[#7F8FA0] hover:cursor-pointer font-bold hover:mr-1 hover:text-[#272727] transition-all'>{text}</p>

            <div className="flex items-center">
                <div className="h-1 bg-black flex-grow"></div>
                <svg className="w-4 h-4 text-gray-600 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div className="h-1 bg-gray-600 flex-grow"></div>
            </div>

        </div>
    )
}

export default ShowAll