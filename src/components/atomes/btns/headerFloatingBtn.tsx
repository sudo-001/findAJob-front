import React from 'react'

type Props = {
    text: string,
}

function HeaderFloatingBtn(props: Props) {
    const { text } = props;

    return (
        <div className={`absolute top-36 left-1 md:top-40 md:left-8 py-2 px-4 rounded-[5px] bg-[#0066FF] hover:cursor-pointer hover:shadow-md flex items-center justify-center`}>
            <p className='text-[#fff] font-bold'>{text}</p>
        </div>
    )
}

export default HeaderFloatingBtn