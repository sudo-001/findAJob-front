import { Colors } from '@/utils/assets/Colors'
import { DesignDetails } from '@/utils/assets/DesignDetail'
import Link from 'next/link';
import React from 'react'

type Props = {
    text: string,
    link: string,
}

function SignUpBtn(props: Props) {
    const { text, link } = props;

    return (
        <Link href={link} className={`py-2 px-4 rounded-[5px] bg-[#0066FF] hover:cursor-pointer hover:shadow-md transition`}>
            <h1 className='text-[#fff] font-bold'>{text}</h1>
        </Link>
    )
}

export default SignUpBtn;