import Link from 'next/link'
import React from 'react'

type Props = {
    text: string,
    link: string,
}


function EnterpriseBtnSignup(props: Props) {

    const { text, link } = props;

    return (
        <Link href={link} className={`py-3 px-20 rounded-[5px] bg-[#fff] border border-[#0066FF] hover:cursor-pointer hover:shadow-lg transition`}>
            <h1 className='text-[#0066FF] font-bold text-lg'>{text}</h1>
        </Link>


    )
}

export default EnterpriseBtnSignup