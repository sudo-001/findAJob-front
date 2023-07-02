import Link from 'next/link';
import React from 'react'


type Props = {
    text: string,
    link: string,
}

function JobFinderBtnSignUp(props: Props) {

    const { text, link } = props;
    
    return (
        <Link href={link} className={`py-3 px-20 rounded-[5px] bg-[#0066FF] hover:cursor-pointer hover:shadow-md transition`}>
            <h1 className='text-[#fff] font-bold text-lg'>{text}</h1>
        </Link>
    )
    
}

export default JobFinderBtnSignUp