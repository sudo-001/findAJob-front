import { Colors } from '@/utils/assets/Colors'
import React from 'react'

type Props = {
    text: string,
}

function ExploreBtn(props: Props) {
    const { text } = props;

    return (
        <div className={`py-2 px-4 rounded-[5px] bg-[#0066FF] hover:cursor-pointer hover:shadow-lg flex items-center transition justify-center`}>
            <h1 className='text-[#fff] text-lg font-bold'>{text}</h1>
        </div>
    )
}

export default ExploreBtn