import React from 'react'

type Props = {
    text: string
}

function HeaderFunctionalBtnSecond(props: Props) {
    const { text } = props;

    return (
        <div className={`absolute bottom-36 right-4 md:bottom-36 md:right-20 py-2 px-4 rounded-[5px] bg-[#0066FF] hover:cursor-pointer hover:shadow-md flex items-center justify-center`}>
            <p className='text-[#fff] font-bold'>{text}</p>
        </div>
    )
}

export default HeaderFunctionalBtnSecond